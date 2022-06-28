const filterKeys = (nutrient, func, val) => {


    let x = val || ""
    let res = {}

    for (let key in nutrient){
        if (func(key)){
            res[key] = nutrient[key];
        }
    }

    return res

}

const mapKeys = (nutrient, func) => {

    let res = {};
    let val;

    for (let key in nutrient){
       let x  = func(key)
       res[x] = nutrient[key]
    }
return res
}

const reduceKeys = (nutrient, func, init) => {
    if (init === undefined){
       return Object.keys(nutrient).reduce(func)

    }else{
        return Object.keys(nutrient).reduce(func, init)
    }
    
   
}