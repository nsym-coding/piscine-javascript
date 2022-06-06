function arrToStr(x) {
    if (Array.isArray(x)){
        return x.join("")
    }
}

function arrToSet(x) {
    var res = new Set(x)
    return res
}

function setToArr(x){
    var res = Array.from(x)
    return res
}

function setToStr(x){
    var res = Array.from(x)
    var res1 = res.join("")
    return res1
}

function strToArr(x){
    var res = Array.from(x)
    return res
}

function strToSet(x){
    var res = Array.from(x)
    var res1 = new Set(res)
    return res1
}

function mapToObj(x){
    var res = Object.fromEntries(x)
    return res
}

function objToArr(x){
    var res = Object.values(x)
   
    return res
}

function objToMap(x){
    var res = new Map(Object.entries(x))
    return res
}

function arrToObj(x){
    
   
 var res = Object.assign({}, x)
    return res
}

function strToObj(x){
    // var st = x.split("")
    var object = Object.assign({}, x)
    return object
}

function superTypeOf (x){
   
        if (typeof x === 'object'){

        
            if (instance instanceof Map){
                return 'Map'
            }else if (instance instanceof Set){
                return 'Set'
            }else if (Array.isArray(x)){
                return 'Array'
            }else{
                return 'Object'
            }
        }else{

            return typeof x
        } 


        
    
}