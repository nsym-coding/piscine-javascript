function split(str, sep){
    var res = []
    var hld = ""
 
    if (sep === ""){
       for (let i = 0; i<str.length; i++){
 
          res.push(str[i])
       }
       return res
    }
 
    if (sep.length === 1){
       for (let i = 0; i< str.length;){
          if (str[i] !== sep){
             hld += str[i]
             i++
          }else if (str[i] === sep){
            
                res.push(hld)
                hld = ""
                i ++
                continue
       }
    }
    res.push(hld)
    return res
    }
 
    if (sep.length > 1){
       for (let i = 0; i< str.length;){
          if (str[i] !== sep[0]){
             hld += str[i]
             i++
          }else if (str[i] === sep[0]){
             if (str.slice(i, sep.length+i) === sep){
                res.push(hld)
                hld = ""
                i += sep.length
                continue
             }else{
                hld += str
                i++
             }
             
          }
       }
       res.push(hld)
       console.log("str check when exit loop--->",hld);
       return res          
    }         
       
 }
 
 /*for join, it takes a separator, if separator is empty then return a string with each element separated by a comma,
 if there is a separator, then return a string with each element separated by the separator,
 if the separator is an empty string then return a string with all elements joined together, 
 if the array is empty then return an empty string*/
 
 function join(arr, sep){
 
    // sep = sep || null
 
    var res = ""
 
    if (arr.length === 0){
       return res
    }
 
    if (sep === null){
       for (let i = 0; i<arr.length; i++){
          res += (arr[i]) + ","
       }
       return res
    }
    
    if (sep !== null){
       
       if (sep === ""){
          for (let i=0; i<arr.length; i++){
             res += arr[i]
       }
       return res
       }
 
       if (sep !== ""){
          for (let i=0; i<arr.length; i++){
 
             if (i !== arr.length && i!== 0){
             res += sep + (arr[i])
 
             }else{
 
                res += (arr[i])
             }
 
          }
          return res
       }
 
    }
 
   
 
 
 }
