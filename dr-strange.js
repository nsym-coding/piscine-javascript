function addWeek(date) {
    const a = new Date(date)
    const epoch = new Date('0001-01-01')
    const day0 = epoch.valueOf() + 62135596800000
    const daysSinceStart = ((((a.valueOf() + 62135596800000) / 86400000)))
  
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const weekday2 = ["secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"]
    let count = 0
    let count1 = 0
    let count2 = 0
  
    for (let i = 0; i <= daysSinceStart; i++) {
        if (count <= 6) {
            count2 = 0
            count1 = count
        } else {
            count1 = 0
            count2 = count
            if (count == 14) {
                count = 0
            }
        }
        count += 1
    }
    if (count <= 7) {
        return weekday[count1]
    } else {
        return weekday2[count2 - 7]
    }
  
  }
  
  function timeTravel(object){
  
    var resDate = new Date(object["date"])
  
    resDate.setHours(object["hour"])
    resDate.setMinutes(object["minute"])
    resDate.setSeconds(object["second"])
  
    return resDate
  
  
  
  }
  
  
  
  console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }))
  