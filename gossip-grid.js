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
     submitButton.setAttribute('class', 'button')
     submitButton.textContent = 'Share gossip!'
     form.setAttribute('id', 'myForm')
     form.appendChild(txtArea)
     form.appendChild(submitButton)
     document.body.append(form)

     //event listener to create new gossip card on submit click
     submitButton.addEventListener('mousedown', function(){
       
        let gsp = document.createElement('div')
        gsp.setAttribute('class', 'gossip')
        gsp.textContent = txtArea.value.toString()
        document.body.insertBefore(gsp,document.body.firstElementChild)
        txtArea.value = ""
        //console.log(txtArea.value.toString());
        // document.querySelectorAll('.gossip')[1]
})

   //create gossip cards        
   for (let i =0; i<gossips.length; i++){
    //condition to create first card as a form
       if (i === 0){
           gossip = document.createElement('div')
           gossip.appendChild(form)
           gossip.setAttribute('class', 'gossip')
           gossip.setAttribute('id', 'gossip')
           
           
           document.body.append(gossip)
           
        }
        //creating the rest of the cards as normal
        gossip = document.createElement('div')
        gossip.setAttribute('class', 'gossip')
        gossip.setAttribute('id', 'gossip')
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

    //setting labels for the 3 range inputs
    const widthLabel = document.createElement("LABEL");
    widthLabel.setAttribute("for", '.width');
    widthLabel.innerHTML = "width";

    //setting attributes for width range
    widthSlider.id = 'width'
    widthSlider.type = 'range'
    widthSlider.className = 'range'
    widthSlider.setAttribute('min', 200)
    widthSlider.setAttribute('max',800)
    widthSlider.defaultValue = 200
    
    
    
    //setting attribues for fontSize range
    fontSizeSlider.id = 'fontSize'
    fontSizeSlider.type = 'range'
    fontSizeSlider.className = 'range'
    fontSizeSlider.defaultValue = '25'
    fontSizeSlider.setAttribute('min', '20')
    fontSizeSlider.setAttribute('max', '40')


    //setting attributes for background range
    backgroundSlider.id = 'background'
    backgroundSlider.type = 'range'
    backgroundSlider.className = 'range'
    backgroundSlider.defaultValue = '60'
    backgroundSlider.setAttribute('min', '20')
    backgroundSlider.setAttribute('max', '75')


   
    //appending all 3 slider to range class
    ranges.appendChild(widthSlider)
    ranges.appendChild(fontSizeSlider)
    ranges.appendChild(backgroundSlider)
    ranges.insertBefore(widthLabel, document.querySelectorAll('.range')[0])
    //appending labels to body
    document.body.append(widthLabel)
    //appending ranges to the body
    document.body.append(ranges)
    
    let arrGoss = document.querySelectorAll('.gossip')
    
    widthSlider.addEventListener('input', function(e){
        

        for (let i =0; i<arrGoss.length; i++){
            arrGoss[i].style.width = e.target.value + 'px'
            
        }
    });

   fontSizeSlider.addEventListener('input', function(e){
    for (let i =0; i<arrGoss.length; i++){
        arrGoss[i].style.fontSize = e.target.value + 'px'
        
    }
   })

   backgroundSlider.addEventListener('input', function(e){
    for (let i =0; i<arrGoss.length; i++){
        arrGoss[i].style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`
        
    }
   
    
   })
}