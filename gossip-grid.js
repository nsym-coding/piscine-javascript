import { gossips } from "./gossip-grid.data.js"

export const grid = () => {
    //global var for gossip
    let gossip;

    //creating form, textarea and submit button for first card
    let form = document.createElement('form')
     let txtArea = document.createElement('textarea')
     let submitButton = document.createElement('button')
     txtArea.setAttribute('type', 'input')
     txtArea.setAttribute('name', 'textarea')
     txtArea.id = 'textarea'
     txtArea.setAttribute('placeholder', 'Got a gossip to share ?')
     submitButton.setAttribute('type', 'button')
     //submitButton.setAttribute('class', 'button')
     submitButton.textContent = 'Share gossip!'
    //  form.setAttribute('id', 'myForm')
    //  form.appendChild(txtArea)
    //  form.appendChild(submitButton)
     //document.body.append(form)

     //event listener to create new gossip card on submit click
     submitButton.addEventListener('mousedown', function(e){
       
        let gsp = document.createElement('div')
        gsp.setAttribute('class', 'gossip')
        gsp.textContent = txtArea.value.toString()
        document.body.insertBefore(gsp,document.querySelectorAll('.gossip')[1])
        txtArea.value = ""
        e.preventDefault()
        //console.log(txtArea.value.toString());
        // document.querySelectorAll('.gossip')[1]
})

   //create gossip cards        
   for (let i =0; i<gossips.length; i++){
    //condition to create first card as a form
       if (i === 0){
           gossip = document.createElement('form')
           gossip.appendChild(txtArea)
           gossip.appendChild(submitButton)

           gossip.setAttribute('class', 'gossip')
           //gossip.setAttribute('id', 'gossip')
           
           
           document.body.append(gossip)
           
        }
        //creating the rest of the cards as normal
        gossip = document.createElement('div')
        gossip.setAttribute('class', 'gossip')
        //gossip.setAttribute('id', 'gossip')
        gossip.setAttribute('name', 'gossip')
        gossip.innerHTML = gossips[i].toString()
        document.body.append(gossip)
    }
    
    //creating ranges div
    let ranges = document.createElement('div')
   //ranges.setAttribute('id', 'ranges')
    ranges.setAttribute('class', 'ranges')
    
    //creating the 3 range inputs
    var widthSlider = document.createElement('input')
    var fontSizeSlider = document.createElement('input')
    var backgroundSlider = document.createElement('input')

    // //setting labels for the 3 range inputs
    // const widthLabel = document.createElement("LABEL");
    // widthLabel.setAttribute("for", '.width');
    // widthLabel.innerHTML = "width";

    //setting attributes for width range
    widthSlider.id = 'width'
    widthSlider.type = 'range'
    widthSlider.className = 'range'
    widthSlider.setAttribute('min', '200')
    widthSlider.setAttribute('max','800')
    //widthSlider.defaultValue = ''
    
    
    
    //setting attribues for fontSize range
    fontSizeSlider.id = 'fontSize'
    fontSizeSlider.type = 'range'
    fontSizeSlider.className = 'range'
    //fontSizeSlider.defaultValue = ''
    fontSizeSlider.setAttribute('min', '20')
    fontSizeSlider.setAttribute('max', '40')


    //setting attributes for background range
    backgroundSlider.id = 'background'
    backgroundSlider.type = 'range'
    backgroundSlider.className = 'range'
    //backgroundSlider.defaultValue = ''
    backgroundSlider.setAttribute('min', '20')
    backgroundSlider.setAttribute('max', '75')


   
    //appending all 3 slider to range class
    ranges.appendChild(widthSlider)
    ranges.appendChild(fontSizeSlider)
    ranges.appendChild(backgroundSlider)
    
    //appending ranges to the body
    document.body.appendChild(ranges)
    
    let arrGoss = document.querySelectorAll('.gossip')
    
    widthSlider.addEventListener('input', function(e){
        

        
            
          let dvs =  document.querySelectorAll('.gossip')
            dvs.forEach((x) => x.style.width = e.target.value + 'px')
            
     
    });

   fontSizeSlider.addEventListener('input', function(e){
    
    
    let dvs =  document.querySelectorAll('.gossip')
    dvs.forEach((x) => x.style.fontSize = e.target.value + 'px')
        
   
   })

   backgroundSlider.addEventListener('input', function(e){

    let dvs =  document.querySelectorAll('.gossip')
        
        dvs.forEach((x) => x.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)` )
   
        
        
    
   
    
   })
}


