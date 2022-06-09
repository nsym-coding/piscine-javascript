function ionOut(str){
    var rgx = new RegExp(/\w*?tion/g)
    var rgx1 = new RegExp(/tion/g)

   var rx = str.match(rgx);
   if (rx === null){
       return []
   }
   console.log("siii?",rx);

var wordArr = []
   
 for (let i=0; i<rx.length; i++){
   wordArr.push(rx[i].replace(rgx1, "t"))
 }
    return wordArr
}