const filterValues = (nutrient, func) =>{
    //for each obj[key] apply function
    
    let res = {};
    for (let key in nutrient){
        if (func(nutrient[key])){
            res[key] = nutrient[key]
        }
    }
    
    return res
    
    }
    
    const mapValues = (nutrient, func, arg) => {
        let res = {};
    
        for (let key in nutrient){
            res[key] = func(nutrient[key])
        }
    return res
    }
    
    const reduceValues = (nutrient, func, init) => {
    
        
    
    let res = init || 0;
    
    let numValues = []
    
    
    
    
    
    for (let key in nutrient){
       numValues.push(parseInt(nutrient[key]))
    }
    
    for (let i = 0; i<numValues.length; i++){
        res = res + numValues[i]
    }
    return res
    
    }