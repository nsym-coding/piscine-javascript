const invert = (inputObj)=>{

    var res = {}
  

   let keys = Object.keys(inputObj)
   let values = Object.values(inputObj)

   for (let i=0; i< keys.length; i++){
       res[values[i]] = keys[i]
       
   }
return res


}