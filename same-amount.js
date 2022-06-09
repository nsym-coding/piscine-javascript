function sameAmount(str, rgx1, rgx2){

    var rg1 = new RegExp(rgx1, "g")
    var rg2 = new RegExp(rgx2, "g")

    var str1Match = str.match(rg1)
    var str2Match = str.match(rg2)

    console.log(str1Match);
    console.log(str2Match);

    if (str1Match === null && str2Match !== null || str1Match !== null && str2Match === null){
        return false
    }


    if (str1Match.length === str2Match.length){
        return true
    }else{
        return false
    }
}