function matchCron(cron, date){
    var inputDate = new Date(date)
    var dayOfWeek = inputDate.getDay().toString()
    var monthOfYear = (inputDate.getMonth() + 1).toString()
    var dayOfMonth = (inputDate.getUTCDate() + 1)
    var hourOfDay = (inputDate.getHours().toString())

  console.log(typeof dayOfMonth,dayOfMonth);

    

    if (inputDate.getDay() === 0){
        dayOfWeek = 7
        dayOfWeek = dayOfWeek.toString()
    }

    var arrCron = cron.split(" ")

    var res = false

    
    console.log("checking day",inputDate.getDay());
    console.log("new day", dayOfWeek);
    console.log(arrCron[4]);
   
    
    if ((arrCron[0] == inputDate.getMinutes().toString() || arrCron[0] == "*") && (arrCron[1] == hourOfDay || arrCron[1] == "*") && (arrCron[2] == dayOfMonth || arrCron[2] == "*")  && (arrCron[3] == monthOfYear || arrCron[3] == "*") && (arrCron[4] == dayOfWeek || arrCron[4] == "*")){
      return true
    }else{
        return false
    }

   
    
}