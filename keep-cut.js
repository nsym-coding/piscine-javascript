function cutFirst(str){
    var res = ""

    for(let i=2; i<str.length; i++){
        res += str[i]
    }
    return res
}

function cutLast(str){
    var res = ""
    for (let i =0; i<str.length-2; i++){
        res += str[i]
    }
    return res
}

function cutFirstLast(str){
    var res = ""
    for (let i =2; i<str.length-2; i++){
        res += str[i]
    }
    return res
}

function keepFirst(str){
    var res = ""
    if (str.length > 2){
            for (let i=0; i<2; i++){

            res += str[i]
        }
        return res
    }else if (str.length < 2){
        return str
    }
}

function keepLast(str){
    var res = ""
    if (str.length > 2){
        for (let i=str.length-2; i<str.length; i++){

        res += str[i]
    }
    return res
}else if (str.length < 2){
    return str
}

}

function keepFirstLast(str){
if (str.length> 3){

    return keepFirst(str) + keepLast(str)
}else{
    return str
}



}