function isFriday(date){

    var inputDate = new Date (date)
    
        if (inputDate.getDay() === 5){
            return true
        }
        return false
    }
    
    function isWeekend(date){
        var inputDate = new Date (date)
    
        if (inputDate.getDay() === 6 || inputDate.getDay() === 0){
            return true
        }
        return false
    }
    
    function isLeapYear(date){
        var inputDate = new Date (date)
    
        if ((inputDate.getFullYear())%4 === 0 || (inputDate.getFullYear())%400 === 0 && (inputDate.getFullYear())%100 === 0){
            return true
        }
        return false
    }
    
    function isLastDayOfMonth(date){
        var test = new Date(date.getTime()),
            month = test.getMonth();
    
        test.setDate(test.getDate() + 1);
        return test.getMonth() !== month;
    }