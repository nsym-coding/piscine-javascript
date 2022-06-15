function adder(inputArr, init=0){
    const result = inputArr.reduce(function add(sum, number){
        return sum + number
    }, init)

    return result
}

function sumOrMul(inputArr, init=0){


    const result = inputArr.reduce(function(init, cv){
        let res = 0
        
        if (cv%2 ===0){
            res = init*cv
        }else{
            res = init+cv
        }
        
        return res
    }, init)
    return result
}

function funcExec(inputArr, init=0){
    const result = inputArr.reduce(function(output, fun){
        return fun(output)

    },init)
    return result
}
