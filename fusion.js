function fusion(objOne, objTwo){

    /**
     * The input will be an object, need to check what type the values are.
     * If they're an array then need to concatenate them.
     * If they're strings then need to concatenate them with a space.
     * If they're number then need to add them.
     * If they're an object then need to join them recursively
     * If the types are mismatched then need to replace the first value with the value of the 
     * 2nd object, IF IT EXISTS
     */
    let res = {};
    let keysOne = Object.keys(objOne)

    const AllKeys = Object.keys(objTwo)
    

    for (const key in objOne){
        if (AllKeys.includes(key)){
            if (objOne[key] instanceof Array && objTwo[key] instanceof Array){
                res[key] = objOne[key].concat(objTwo[key])
                             delete objOne[key]
                          delete objTwo[key]
            }
            res = Object.assign(res,objOne, objTwo)
            if (typeof objOne[key] === 'string' && typeof objTwo[key] === 'string'){
                res[key] = objOne[key] + " " + (objTwo[key])
                                    delete objOne[key]
                                 delete objTwo[key]
            }
            res = Object.assign(res,objOne, objTwo)
            if (checkNum(objOne[key]) && checkNum(objTwo[key])){
                console.log(objOne[key], objTwo[key]);
                res[key] = objOne[key] +  (objTwo[key])
                                    delete objOne[key]
                                 delete objTwo[key]
            }
            res = Object.assign(res,objOne, objTwo)
            if ((objOne[key] instanceof Object) && (objTwo[key] instanceof Object)){
               
                    res[key] = fusion(objOne[key], objTwo[key])
                    delete objOne[key]
                    delete objTwo[key]
                
               
                console.log("entered the condition");
            }
        }
        
        
    }
    return  res
}
