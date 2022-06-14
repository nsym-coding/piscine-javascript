function firstDayWeek(week, year){

    var inputDate = new Date (Date.UTC(year, 0, 1 + (week - 1) * 7, 12));
    
    if (year < 1000){

        inputDate.setFullYear(year)
    }
    var weekStart = inputDate;

    if (week === 1 && year === "1000"){
        weekStart = new Date(Date.UTC(1000, 0, 1, 12))
        
    }else{

        while (inputDate.getDay() != 1){
              weekStart.setDate(inputDate.getDate() - 1)
          }
        
    }

   



    var resDay = weekStart.getDate().toString().padStart(2, 0);
    var resMonth = (weekStart.getMonth()+1).toString().padStart(2,0);
    var resYear = weekStart.getUTCFullYear().toString().padStart(4,0);
    

    var result = resDay + "-" + resMonth + "-" + resYear

  
    return result
}
