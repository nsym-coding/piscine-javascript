function indexOf(arr, str, opt){
    opt = opt || 0;

    if (opt === 0){
    for(let i =0; i<arr.length; i++){
        if (arr[i] === str){
            return i
        }
        }
    return -1
}else if(opt !== 0){
    
        for (let j = opt; j<arr.length; j++){
            if (arr[j] === str){
                return j
            }
        }
        return -1
    }
}

function lastIndexOf(arr, str, opt){
    opt = opt || 0

    if (opt === 0){
        for(let i =arr.length;i>0; i--){
            if (arr[i] === str){
                return i
            }
            }
        return -1
    }else if (opt !== 0){
        for (let j = opt; j<arr.length; j--){
            if (arr[j] === str){
                return j 
            }
        }
        return -1
    }

}

function includes(arr, str){
   
    var count = 0
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === str){
            count += 1
        }
    }
        if (count === 0){
            return false
        }else{
            return true
        }
    }
    