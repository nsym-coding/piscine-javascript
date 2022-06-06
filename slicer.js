function slice(arr, start, end){
    end = end || 0
    if (typeof arr === 'string'){
        var res = ""
        if (end === 0){
            if (start>=0){
                for(let i=start; i<arr.length; i++){
                    res += arr[i]
                }
                return res
            }else if (start <0){
               start = Math.abs(start)
                    for(let i = arr.length-(start); i<arr.length; i++){
                        res += arr[i]
                    
                }
                return res
            }
        }else if (end !== 0){
            if (start>=0 && end >0){
                for(let i=start; i<end; i++){
                    res += arr[i]
                }
                return res
        }else if (start < 0 && end <0){
            start = Math.abs(start)
            end = Math.abs(end)
            for(let i = arr.length-(start); i<arr.length-end; i++){
                res += arr[i]
            }
            return res

        }else if (end < 0){
            end = Math.abs(end)
            for(let i = start; i<arr.length-end; i++){
                res += arr[i]
            }
            return res
        }
    }

    }else if (arr instanceof Array){
        var resSl = []
        
        if (end === 0){
            if (start>=0){
                for(let i=start; i<arr.length; i++){
                    resSl.push(arr[i])
                }
                return resSl
            }else if (start <0){
               start = Math.abs(start)
                    for(let i = arr.length-(start); i<arr.length; i++){
                        resSl.push(arr[i])
                    
                }
                return resSl
            }
        }else if (end !== 0){
            if (start>=0 && end >0){
                for(let i=start; i<end; i++){
                    resSl.push(arr[i])
                }
                return resSl
        }else if (start < 0 && end <0){
            start = Math.abs(start)
            end = Math.abs(end)
            for(let i = arr.length-(start); i<arr.length-end; i++){
                resSl.push(arr[i])
            }
            return resSl

        }else if (end < 0){
            end = Math.abs(end)
            for(let i = start; i<arr.length-end; i++){
                resSl.push(arr[i])
            }
            return resSl
        }
    }
}
}