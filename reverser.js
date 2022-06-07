function reverse(input){
    
    if (typeof input === 'string'){
        var res = ""
        for (let i = input.length-1; i>=0; i--){
            res += input[i]
        }
        return res

    }else if (input instanceof Array){
        var resSl = []
        for (let i = input.length-1; i>=0; i--){
            resSl.push(input[i])
        }
        return resSl
    }

}