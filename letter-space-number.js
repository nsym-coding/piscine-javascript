function letterSpaceNumber(str){
    var res = []

    const rxp = new RegExp(/[a-zA-Z] [0-9](?!\w)/g)
   

    var match = str.match(rxp)
    
  

    if (match === null){
        return res
    }
    return match
}