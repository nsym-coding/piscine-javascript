function chunk(arr, num){
    var res = []
    var hld = []

    for (let i = 0; i<arr.length; i++){
        if (arr.length >= num-1){
            hld.push(arr.slice(i, num+i))
            arr.splice(i, num-1)
        }else if (arr.length < num){
            hld.push(arr)
        }
        continue
    }

    for (let i = 0; i<hld.length; i++){
        res.push(hld[i])
    }

    return res

}