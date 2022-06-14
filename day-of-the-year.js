function dayOfTheYear(date){
    var inputDate = new Date(date)

    var inputYear = inputDate.getUTCFullYear()
    var inputMonth = inputDate.getUTCMonth()
    var inputMonthDay = inputDate.getUTCDate()
    var res = 0
    var arrMonthDays = [];
      var  finalResult = 0
   

    if (inputYear % 4 === 0 && inputYear%100 !== 0 || (inputYear%4 === 0 && inputYear%400 === 0)){
         arrMonthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    }else{
        arrMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    }



    for (let i = 0; i<inputMonth; i++){
        res =res + arrMonthDays[i]
       
    }



          finalResult =  (res + inputMonthDay) 
     
  
    
return finalResult

}
