function every(inputArr, reducerFunc){



    for (let i = 0; i <inputArr.length; i++){
        const result = reducerFunc(inputArr[i], i, inputArr)
        if (!result){
            return false
        }
    }

   
     return true
}

function some(inputArr, reducerFunc){
 
    for (let i = 0; i <inputArr.length; i++){
        const result = reducerFunc(inputArr[i], i, inputArr)
        if (result){
           return true
        }
    }

 
     return false
}

function none(inputArr, reducerFunc){


    for (let i = 0; i <inputArr.length; i++){
        const result = reducerFunc(inputArr[i], i, inputArr)
        if (result){
            return false
        }
    }

   
    return true

}
