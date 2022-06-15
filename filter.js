function filter(inputArr, func){
    var res = []
    
    for (let i = 0; i <inputArr.length; i++){
       const result = func(inputArr[i], i, inputArr)
       if (result){
        res.push(inputArr[i])
       }   
    }
    return res
    }
    
    function reject(inputArr, func){
    
        var res = []
    
    for (let i = 0; i <inputArr.length; i++){
       const result = func(inputArr[i], i, inputArr)
       if (!result){
        res.push(inputArr[i])
       }   
    }
    return res
    
    }
    
    function partition(inputArr, func){
        var resT = []
        var resF = []
        var finalRes = []
    
        for (let i = 0; i <inputArr.length; i++){
            const result = func(inputArr[i], i, inputArr)
            if (!result){
             resF.push(inputArr[i])
            }else if (result){
                resT.push(inputArr[i])
            } 
         }
    
         finalRes.push(resT)
         finalRes.push(resF)
    
         return finalRes
    }