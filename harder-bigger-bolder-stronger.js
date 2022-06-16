export const generateLetters = () =>{
    let fontS = 11
    for (let i = 0; i<120; i++){
        let letterDiv = document.createElement("div")
        // let el = document.querySelectorAll("div")
        // let arrOfDivs = Array.from(el)
        let newLetter = document.createTextNode(randomLetter().toString())
        
        letterDiv.appendChild(newLetter)
        
        let currentDiv = document.getElementById("div")
        let letter = document.body.insertBefore(letterDiv, currentDiv)
        letterDiv.style.fontSize = fontS.toString()+"px"
        console.log(fontS);
        if (i < 40){
           letterDiv.style.fontWeight = 300
        }else if (i > 40 &&i <80){
           letterDiv.style.fontWeight = 400
        }else if (i > 79){
            letterDiv.style.fontWeight = 600
            
        }
        fontS ++
    }
    
}

function randomLetter(){
    let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    let ranNum = Math.floor((Math.random() * alphaUpper.length-1) + 1)
    console.log(alphaUpper[ranNum]);
    return alphaUpper[ranNum]
}