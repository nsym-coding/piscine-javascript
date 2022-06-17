import { colors } from './fifty-shades-of-cold.data.js'

let style
let head

let temp;
let body



export const generateClasses = () =>{

    head = document.getElementsByTagName("head")[0];
     style = document.createElement("style");

    for (let i = 0; i < colors.length; i++){
        
        style.append("." + colors[i] + " " + "{" + "\n" +
        "background: " + colors[i]+ ";" + "\n" +
        "}")
    }
    
    head.append(style)





}

export const generateColdShades = () =>{

    let validColors = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
    let body = document.getElementsByTagName('body')[0]
   



for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j<validColors.length; j++){

    
    if (colors[i].includes(validColors[j])){
   temp = document.createElement('div');
    temp.className = colors[i];
    temp.innerHTML = colors[i];
    body.appendChild(temp);
   
  }
}
}

   

   

}


export const choseShade = (clickedColor) =>{

   let divInBody = document.querySelectorAll("div")
   console.log(divInBody);

   divInBody.forEach((x) => x.className = clickedColor)
}