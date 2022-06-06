function words(n){
    return n.split(" ")
}

function sentence(n){
    return n.join(" ")
}

function yell(n){
    return n.toUpperCase()
}

function whisper(n){
    return "*" + n.toLowerCase() + "*"
}

function capitalize(n){
 return n[0].toUpperCase() + n.slice(1).toLowerCase()
 
}




// Write 5 functions:

// words: that takes a string, splits it by spaces, and returns an array of those substrings.
// sentence: that takes an array of strings, and joins them with spaces to return a single string.
// yell: that takes a string and returns it in upper case.
// whisper: that takes a string and returns it in lower case, surrounded by *.
/* capitalize: that takes a string and transforms it so that the first character is 
upper case, and the subsequent characters are lower case.*/
