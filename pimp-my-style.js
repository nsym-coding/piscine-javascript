import { styles } from './pimp-my-style.data.js'

let styleCounter = 0
let styleDecreaser = 15

export const pimp = () => {
  


   

  
    let button = document.getElementsByClassName("button")[0]
    
    let buttonClasses = button.classList
    //buttonClasses.add("unpimp")
    //buttonClasses.toggle("pimp")


    if (styleCounter <15){
        styleDecreaser = 15
    button.textContent = "pimp my style"

   
    button.addEventListener('click' ,buttonClasses.add(styles[styleCounter])) ; 

   
console.log(styleCounter);
       styleCounter ++
   }
   if (styleCounter === 15 && styleDecreaser >=-1){ 

    // if (styleCounter === 15 && styleDecreaser === 15){

    //     button.textContent = "unpimp my style"
    // }else{
    //     button.textContent = "pimp my style"
    // }


       button.addEventListener('click' ,buttonClasses.remove(styles[styleDecreaser]))
       if (styleDecreaser > -1 && styleDecreaser <=15){

           button.addEventListener('click' ,buttonClasses.add("unpimp"))
       }

       styleDecreaser--
       //buttonClasses.toggle("unpimp", styleDecreaser >-1 && styleDecreaser < 13)
       console.log(styleDecreaser);
       if (styleDecreaser <0){
        styleCounter = 0
        button.textContent = "pimp my style"
        //buttonClasses.toggle("pimp")
        buttonClasses.remove("unpimp")
        buttonClasses.toggle()
       }
    }

    
   
 
}
    