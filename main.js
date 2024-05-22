// Select The Start Game Button
document.querySelector('.controls-buttons span').onclick = function () {

  let yourName = window.prompt('Please enter your name')

  if (yourName == null || yourName == '') {
    document.querySelector('.info-container .name span').innerHTML = 'unknown'
  } else {
    document.querySelector('.info-container .name span').innerHTML = yourName
  }

  document.querySelector('.controls-buttons').remove()
}


let duration = 1000


// Select Blocks Container
let blockContainer = document.querySelector('.memory-game-block')

// Create Array From Game Blocks
let arrayOfBlocks = Array.from(blockContainer.children)

// console.log(arrayOfBlocks)


//  Create Range Of Keys

// let orderRange = Array.from({ length: arrayOfBlocks.length }, (_, i) => i) => 1
// let orderRange = [...Array(arrayOfBlocks.length).keys()] => 2
// let orderRange = Array.from(Array(arrayOfBlocks.length).keys()) => 3

let orderRange = Array.from({ length: arrayOfBlocks.length }, (_, i) => i)


// console.log(orderRange) => Before Shuffling

shuffleArray(orderRange)

// console.log(orderRange) => After Shuffle [4, 17, 11, 12, 18, 19, 15, 2, 3, 9, 16, 6, 14, 0, 8, 10, 7, 1, 13, 5]

arrayOfBlocks.forEach((block, index) => {

  block.style.order = orderRange[index]


  block.addEventListener('click', () => {

    flipBlock(block);
  })
})



function flipBlock(selectedBlock) {

  // Add Class is-flipped

  selectedBlock.classList.add('is-flipped')


  // Collect All Flipped Cards

  let allFlippedBlocks = arrayOfBlocks.filter(block => block.classList.contains('is-flipped'))



  if (allFlippedBlocks.length == 2) {

    // Stop Clicking

    stopChecking()

    // Checking Matching Blocks
    checkMatchedBlock(allFlippedBlocks[0], allFlippedBlocks[1])

  }

}



function stopChecking() {

  blockContainer.classList.add('no-click')


  setTimeout(() => {

    blockContainer.classList.remove('no-click')

  }, duration)
}

function checkMatchedBlock(fBlock, sBlock) {

  let tries = document.querySelector('.tries span')


  if (fBlock.dataset.technology == sBlock.dataset.technology) {

    fBlock.classList.remove('is-flipped')
    sBlock.classList.remove('is-flipped')

    fBlock.classList.add('has-match')
    sBlock.classList.add('has-match')

  }
  else {
    tries.innerHTML = Number(tries.innerHTML) + 1


    setTimeout(() => {
      fBlock.classList.remove('is-flipped')
      sBlock.classList.remove('is-flipped')
    }, duration)
  }

  checkWinner(tries)
}

function checkWinner(tries) {
  let allFlippedBlocks = arrayOfBlocks.filter(block => block.classList.contains('has-match'))
  // console.log(allFlippedBlocks)

  if (allFlippedBlocks.length == 20) {

    let div = document.createElement('div')
    div.classList.add('winner')
    div.innerHTML = `Winner`


    let buttons = document.createElement('button')
    buttons.innerHTML = `Play Again`
    buttons.className = 'reload'
    div.appendChild(buttons)

    document.body.appendChild(div)
  }
}

document.addEventListener('click', (e) => {
  if (e.target.className == 'reload') {
    window.location.reload()
  }
})
function shuffleArray(array) {

  let current = array.length,
    temp, random


  while (current > 0) {

    random = Math.floor(Math.random() * current)

    current--

    // Sava Current Element In Stash

    temp = array[current]

    // Current Element = Random Element

    array[current] = array[random]

    // Random Element = Get Element From Stash

    array[random] = temp

  }
  return array
}

