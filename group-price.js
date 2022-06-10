function groupPrice(str){


    var rgx = new RegExp(/[\$]?\d+\.\d+|USD?\d+\.\d+/g)
    var rgx1 = new RegExp(/[\$|\.]|[USD{3}|\.]/g)
    var rgx2 = new RegExp(/USD|\./g)

    var rgxMatch = str.match(rgx)

    
    var res = []
    var res1 = []

   
   
    if (rgxMatch !== null){
    for (let i = 0; i<rgxMatch.length; i++){
        if (str.includes("USD") === true){
            res.push(rgxMatch[i] + rgxMatch[i].split(rgx2))
            break

        }else if (str.includes("$") === true){

            res.push(rgxMatch[i] + rgxMatch[i].split(rgx1))
        }else{
            return []
        }
            
            
        }
    }

    for (let j = 0; j<res.length; j++){
        res1.push(res[j].split(","))
    }

  

    if (res === null){
        return []
    }

    return res1
    
}