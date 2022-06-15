function filterShortStateName(inputArr){

    return inputArr.filter(word => word.length<7)
}

function filterStartVowel(inputArr){
    return inputArr.filter(word => word[0].match(/^[Aa|Ee|Ii|Oo|Uu]/g))
}

function filter5Vowels(inputArr){
    return inputArr.filter(word => fiveVowels(word) > 4)
}

const filter1DistinctVowel = (arr) => {
    return arr.filter(str => {
        if (str.match(/[aeiou]/gi).every(v => v.toLowerCase() === str.match(/[aeiou]/gi)[0].toLowerCase())) {
            return str
        }
    })
}

function LongName(arr){
    return inputArr.filter(word => word.length>8)
}



// Create a function multiFilter that takes an array of objects and that returns only the ones which:

// the key capital contains at least 8 characters.

// the key name does not start with a vowel

// the key tag has at least one vowel.

// the key region is not 'South'

var rgxVowelContain = new RegExp(/[Aa|Ee|Ii|Oo|Uu]/g)


function multiFilter(inputArr){


    



  return inputArr.filter(x => (x.tag.match(/[Aa|Ee|Ii|Oo|Uu]/g) !== null 
      && x.capital.length >= 8 
      && x.name.match(/\b([^Aa|Ee|Ii|Oo|Uu|\s])/g) !== null 
      && x.region !== "South"))
  }







function fiveVowels(input){

    var res = 0

    var match = input.match(/[Aa|Ee|Ii|Oo|Uu]/g)
    console.log(match);
    
    if (match ===  null){
return res
    }else return match.length
}
