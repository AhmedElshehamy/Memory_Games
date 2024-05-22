let array = Array.from({ length: 20 }, (_, i) => i + 1)
// // console.log(array)


// function suffleArray(array) {
//     // console.log(array)

//     let current = array.length,
//         temp, random

//     while (current > 0) {
//         random = Math.floor(Math.random() * current)

//         current--

//         // Sava Current Element On Stash

//         temp = array[current]

//         // Current Element == Random Element

//         array[current] = array[random]

//         // Random Element = Get Element On Stash

//         array[random] = temp
//     }
//     return array
// }

// console.log(
//     suffleArray(array))


// console.log(array.sort(() => Math.random() - .5))


function shuffleArray(array) {
    let shuffleArray = []
    let usedIndex = []

    let i = 0

    while (i < array.length) {
        let randomIndex = Math.floor(Math.random() * array.length)
        if (!usedIndex.includes(randomIndex)) {
            usedIndex.push(randomIndex)
            shuffleArray.push(array[randomIndex])
            i++
        }
    }
    return shuffleArray
}
console.log(shuffleArray(array))