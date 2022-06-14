function citiesOnly(inputArr){  

    var mapCities = inputArr.map(x => x.city)
  
  return mapCities
  }
  
  function upperCasingStates(inputArr){
      var upperStates = inputArr.map(x => x.replace(/\b\w/g, c => c.toUpperCase()))
  
      return upperStates
  }
  
  function fahrenheitToCelsius(inputArr){
     var intTemp = inputArr.map(x=>parseInt(x))
  
     return intTemp.map(x=> (Math.floor((x- 32) * 5/9)).toString() + "°C") 
  }
  
  function trimTemp(inputArr){
  
      return inputArr.map(item=>{
  
          const newObj = Object.assign({}, item);
          newObj.temperature = (item.temperature).replace(/\s/g, "");
          return newObj
      }
      )  
  }
  
  function tempForecasts(inputArr){
      
      var res = [] 
    
  
      
      for (let i = 0; i<inputArr.length; i++){
          
          var tempInt = inputArr.map(x=> x.temperature = parseInt(x.temperature))
          var tempC = inputArr.map( x=>(Math.floor((x.temperature- 32) * 5/9)).toString() + "°Celsius")
          var state = inputArr.map(x=> x.state.replace(/\b\w/g, c => c.toUpperCase()))  
          var city = inputArr.map(x=> x.city) 
          res.push(tempC[i] + " in " +city[i]+", " +state[i])
  
      } 
      return res
  }