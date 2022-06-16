function fold(inputArr, reducerFunc, init){

    let acc = init;
    for (const x of inputArr){
        acc = reducerFunc(acc, x)
    }
    return acc

}

function foldRight(inputArr, reducerFunc, init){
    let acc = init || 0;

   for (let i = inputArr.length-1; i>=0; i--){
   
    acc = reducerFunc(acc, inputArr[i])
   }
    return acc
}

function reduce(inputArr, reducerFunc){

    if (inputArr.length < 1){
        console.log("ERROR");
    }

    let acc = inputArr[0]

    for (let i=1; i< inputArr.length; i++){
        acc = reducerFunc(acc, inputArr[i])
    }

    return acc

}

function reduceRight(inputArr, reducerFunc){
    if (inputArr.length < 1){
        console.log("ERROR");
    }

    let acc = inputArr[inputArr.length-1]

    for (let i=inputArr.length-2; i>=0; i--){
        acc = reducerFunc(acc, inputArr[i])
    }

    return acc

}