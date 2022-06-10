/*returns all URLs present in the dataSet*/
function getURL(str){
    var rgx = new RegExp(/(http|https)(?!\s)(:\/\/)(?!\s)(.+?)(\s{1})/g)  

   var res = str.match(rgx);

   for (let i = 0; i<res.length; i++){
       res[i] = res[i].trimEnd()
    } 

   return res;
}

/*returns URLs from the dataSet, with at least 3 query parameters*/
function greedyQuery(str){
    var rgx = new RegExp(/(http|https)(?!\s)(:\/\/)(?!\s)(.+?)(\s{1})/g) 

   //var rgx = new RegExp(/^(http|https)(?!\s)(:\/\/)(?!\s)[a-z|A-z|0-9|\?|\/|\.|\=|\,|\-|\&]*/g)  
    var rgxAmp = new RegExp(/[\&]/g)

    var res = str.match(rgx);

    console.log(res);

    var resFinal = []
    var trash = []

  if (res === null){
      return []
  }
 
    for (let i =0; i<res.length; i++){
            if (res[i].match(rgxAmp) === null){
                trash.push(res[i])
            }
            else if (res[i].match(/[\&]/g).length >= 2){
       res[i] = res[i].trimEnd()

                resFinal.push(res[i])
            }
        }

    
   

    return resFinal


}

/*returns URLs from the dataSet, with at least 2 but not more than 3 query paramaters*/
function notSoGreedy(str){

    var rgx = new RegExp(/(http|https)(?!\s)(:\/\/)(?!\s)(.+?)(\s{1})/g) 

    //var rgx = new RegExp(/^(http|https)(?!\s)(:\/\/)(?!\s)[a-z|A-z|0-9|\?|\/|\.|\=|\,|\-|\&]*/g)  
     var rgxAmp = new RegExp(/[\&]/g)
 
     var res = str.match(rgx);
 
     console.log(res);
 
     var resFinal = []
     var trash = []
 
   if (res === null){
       return []
   }
  
     for (let i =0; i<res.length; i++){
             if (res[i].match(rgxAmp) === null){
                 trash.push(res[i])
             }
             else if (res[i].match(/[\&]/g).length >= 1 && res[i].match(/[\&]/g).length < 3 ){
        res[i] = res[i].trimEnd()
 
                 resFinal.push(res[i])
             }
         }
 
     
    
 
     return resFinal
 

}