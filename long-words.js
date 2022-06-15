function longWords(inputArr){
    return inputArr.every(long)

}

function oneLongWord(inputArr){
    return inputArr.some(longTen)

}

function noLongWords(inputArr){
    return inputArr.every(sevenLess)
}

const long = (word) => word.length >= 5 
const longTen = (word) => word.length >= 10
const sevenLess = (word) => word.length <= 6