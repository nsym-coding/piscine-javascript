let divInBody
let bdy
let n 
export const compose = () => {
    let currentWords = []
    let notesNumber = 0
   let bdy = document.body
      bdy.setAttribute('id', 'body')
       n = document.getElementById('body')
    // let keyTrial = new KeyboardEvent("type", key)

    document.addEventListener('keydown', (e) => {
      console.log(e.keyCode);
       if (e.key >= 'a' && e.key <= 'z'){
       let temp = document.createElement('div');
    temp.className ="note";
    temp.id = "notes" + notesNumber
    notesNumber ++
    temp.innerHTML =e.key;
    //temp.style.color = "red"
    temp.style.backgroundColor = '#' + e.keyCode.toString() *getRandomInt(69)
    console.log(temp.style);
     divInBody= document.querySelectorAll("div")
    
    document.body.appendChild(temp);
        //document.body.append(e.key)
        document.body.style.backgroundColor = 'FFFFFF'+e.code
       }
       if (e.key === 'Escape'){
         while(n.firstChild){
            n.removeChild(n.firstChild)
         }
      //    let d = document.getElementsByTagName('body')
        
      // //    if (divInBody.length != null){

      // //       divInBody.forEach((x) => document.body.removeChild(x))
      // //    }
      // //   document.body.remove(divInBody)
       }
       console.log(`notes${notesNumber}`);

       if(e.key === 'Backspace'){
         //let n = document.getElementById('body')
         n.removeChild(n.lastElementChild)
       }
    })

    // let letter = KeyboardEvent.key

   // console.log(keyTrial);

}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }
 