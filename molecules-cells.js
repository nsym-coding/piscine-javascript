function RNA(str){
    var res = ""
    

    if (str.length === 0){
        return res
    }

    for (let i =0; i<str.length;i++){
       if (str[i] === "G"){res += "C"}
       if (str[i] === "C"){res += "G"}
       if (str[i] === "T"){res += "A"}
       if (str[i] === "A"){res += "U"}
        
    }
    return res
}

function DNA(str){
    var res = ""
    

    if (str.length === 0){
        return res
    }

    for (let i =0; i<str.length;i++){
       if (str[i] === "C"){res += "G"}
       if (str[i] === "G"){res += "C"}
       if (str[i] === "A"){res += "T"}
       if (str[i] === "U"){res += "A"}
        
    }
    return res
}