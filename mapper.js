function map(inputArr, fun){
    var res = []

    for (let i =0; i<inputArr.length; i++){
        res.push(fun(inputArr[i], i, inputArr))
    }
    return res

  
}

function flatten(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, d - 1) : val), [])
        : arr.slice();
};


function flatMap(inputArr, fun){
    var res = []

    for(let i=0; i<inputArr.length; i++){
        res.push(fun(inputArr[i], i, inputArr))
        
    }
    return flatten(res)

}