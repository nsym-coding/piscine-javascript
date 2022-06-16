export const build = (numOfBricks) =>{
    
    
    
    
  
    let i = 1
    function oneBrick(){

    let brickDiv = document.createElement("div")
    
    brickDiv.setAttribute("id", "brick-"+i.toString())
    
    
    let currentDiv = document.getElementById("div")
    let bricks = document.body.insertBefore(brickDiv, currentDiv)
    if ((i+1)%3 === 0){
        brickDiv.setAttribute("foundation", true)
    }else{
        brickDiv.setAttribute("foundation", false)
    }
    i++
}     
    
 let start = setInterval(oneBrick,100)
 setTimeout(clearIntvl, numOfBricks*100)

 function clearIntvl(){
    clearInterval(start)
 }


}

export const repair = (numIds) =>{

let chosenBricks = []

let el = document.querySelectorAll("div")
let arrOfDivs = Array.from(el)

console.log(arrOfDivs);
for (let i = 0; i<arrOfDivs.length; i++){
   
    if (numIds.includes(arrOfDivs[i].id)){
        chosenBricks.push(arrOfDivs[i])
    }
}

for (let i = 0; i<chosenBricks.length; i++){
    if (chosenBricks[i].hasAttribute("foundation")){
        chosenBricks[i].setAttribute("repaired", "in progress")
    }else if (chosenBricks[i].hasAttribute("foundation")!== true){
        chosenBricks[i].setAttribute("repaired", true)
    }
}
console.log(chosenBricks);




}

export const destroy = () =>{

let el = document.querySelectorAll("div")
let arrOfDivs = Array.from(el)
let lastbrick = arrOfDivs[arrOfDivs.length-1]

lastbrick.remove()



}