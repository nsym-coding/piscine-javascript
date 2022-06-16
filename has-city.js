function hasCity(country, cityArr){
    return function(city){
        if (cityArr.includes(city)){
            return city + " is a city from " + country
        }
        return city + " is not a city from " + country
    }

}