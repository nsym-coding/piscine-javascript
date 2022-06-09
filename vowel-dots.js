const vowels = new RegExp(/[Aa|Ee|Ii|Oo|Uu]/g)
function vowelDots(str){



    var match = str.match(vowels)

    var newStr = str.replace(vowels, "$&.")

    
    if (match === null){
        return str
    }

    
    //console.log(arrStr);
    return newStr
}