function countLeapYears(date){
    var inputDate = new Date(date)

    var inputYear = inputDate.getFullYear()

    if (inputYear == 1){
        return 0
    }

    

    var count = 1

    for (let i = 5; i<inputYear; i++){
       if ((i %4 ==0) && i%100 != 0 || (i%4 == 0 && i%400 == 0) && i){
            count ++
        }
    }

    return count



}