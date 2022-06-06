const secYears = 86400
const earth = 365.25
const mercury =0.2408467
const venus =0.61519726
const mars =1.8808158
const jupiter =11.862615
const saturn =29.447498
const uranus =84.016846
const neptune = 164.79132

//div sec by secYears, then divide by the earth year on planet then * 7 is the answer

function dogYears (planet, dogAge) {
    switch (planet) {
        case "earth":
            var n = ((dogAge/secYears) / earth) * 7;
           return Number(Number.parseFloat(n).toFixed(2));
        case "mercury":
            var n = ((dogAge/secYears) / (earth*mercury)) * 7;
           return Number(Number.parseFloat(n).toFixed(2));
        case "venus":
            var n = ((dogAge/secYears) / (earth*venus)) * 7;
            return Number(Number.parseFloat(n).toFixed(2));
        case "mars":
            var n = ((dogAge/secYears) / (earth*mars)) * 7;
           return Number(Number.parseFloat(n).toFixed(2));
        case "jupiter":
            var n = ((dogAge/secYears) / (earth*jupiter)) * 7;
           return Number(Number.parseFloat(n).toFixed(2));
        case "saturn":
            var n = ((dogAge/secYears) / (earth*saturn)) * 7;
           return Number(Number.parseFloat(n).toFixed(2));
        case "uranus":
            n = ((dogAge/secYears) / (earth*uranus)) * 7;
           return Number(Number.parseFloat(n).toFixed(2));
        case "neptune":
            var n = ((dogAge/secYears) / (earth*neptune)) * 7;
           return Number(Number.parseFloat(n).toFixed(2));
    }

    
    
    
}
//console.log(dogYears("mercury", 2134835688))

