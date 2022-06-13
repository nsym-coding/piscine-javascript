function isValid(date){

    if (typeof date !== 'string'){
        date = new Date(date)
    }
    if (date instanceof Date && !isNaN(date) && date.toString() !== "Invalid Date"){
        return true
    }

    return false
}

function isAfter(date1, date2){

    if (date1 > date2){
        return true
    }

    return false

}

function isBefore(date1, date2){
    if (date2 > date1){
        return true
    }

    return false
}

function isFuture(date){
    if (typeof date !== 'string'){
        date = new Date(date)
    }
    if (date instanceof Date && !isNaN(date) && date.toString() !== "Invalid Date" && date > Date.now()){
        return true
    }
}

function isPast(date){
    if (typeof date !== 'string'){
        date = new Date(date)
    }
    if (date instanceof Date && !isNaN(date) && date.toString() !== "Invalid Date" && date < Date.now()){
        return true
    }
}