export const pick = () =>{

    let body = document.querySelector('body')
    let bodyRect = body.getBoundingClientRect()

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    var svgLineX = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
    var svgLineY = document.createElementNS("http://www.w3.org/2000/svg", "line");
    svgLineX.setAttributeNS(null,'id', 'axisX')
  
    svgLineX.style.stroke = 'yellow'
    
    svgLineY.setAttributeNS(null,'id', 'axisY')

    svg.appendChild(svgLineX)
    svg.appendChild(svgLineY)

    
    var hslDisplay = document.createElement('div')
    var hueDisplay = document.createElement('div')
    var lumosDisplay = document.createElement('div')

    hslDisplay.setAttribute('class', 'hsl')
    hslDisplay.setAttribute('id', 'hsl')
    hueDisplay.setAttribute('class', 'hue')
    lumosDisplay.setAttribute('class', 'luminosity')
    
    
    
    document.body.append(svg)
  
    document.body.append(hslDisplay)
    document.body.append(hueDisplay)
    document.body.append(lumosDisplay)
    
    
    
    
    document.addEventListener('mousemove', function (e){
        
      

       
        
        let mouseX = e.clientX
        let mouseY = e.clientY
        svgLineX.setAttributeNS(null,'x1', mouseX)
        svgLineX.setAttributeNS(null,'x2', mouseX)
        svgLineY.setAttributeNS(null, 'y1',mouseY)
        svgLineY.setAttributeNS(null, 'y2',mouseY)
        
        
        //Screen height and width never change
        let screenW = window.innerWidth
        let screenH = window.innerHeight
        let huePercentage = Math.round((mouseX/screenW)*360)
        //console.log("HUE %", huePercentage);
        let lumos = Math.round((mouseY/screenH)*100)
        let saturation = 50 

        document.body.style.background= `hsl(${huePercentage}, 50%,  ${lumos}%)`
        let screenMidW = screenW/2
        let screenMidH = screenH/2
       hslDisplay.style.left = screenMidW
       hslDisplay.style.top = screenMidH
       hslDisplay.textContent = `hsl(${huePercentage}, 50%, ${lumos}%)\n`
       hueDisplay.textContent = `hue ${huePercentage}`
       lumosDisplay.textContent = `${lumos}` + "\n" +"luminosity"
      
       hueDisplay.style.left= screenW -500 + 'px'
       hueDisplay.style.top = screenH-screenH + 'px'
      
       lumosDisplay.style.left = 0
       lumosDisplay.style.top = screenH + 'px'
      
  

        let copyHSL = document.getElementById('hsl')

        document.addEventListener('mousedown', function(e){

            var range = document.createRange();
        range.selectNode(document.getElementById('hsl'));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        })
            
        
        

      
 
})


}