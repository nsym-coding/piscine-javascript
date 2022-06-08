function nasa(N){

    var res = ""


    for (let i=1; i<=N; i++){
        if (i%3 === 0 && i%5 !== 0){ 
            if (i === N){
            res += "NA"}

            else{

                res += "NA "}
            }
       else if (i%3 !== 0 && i%5 === 0){
        if (i === N){
        res += "SA"}
            else{
        res += "SA "}
        }   
      else  if (i%3 === 0 && i%5 === 0){ 
          if (i === N){
          res += "NASA"}
else{
    res += "NASA "}
          }
        else {
            if (i === N){
            res += i.toString()}
            else{

                res += i.toString() + " "}
            }



    }
    return res

}