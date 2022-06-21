let isClicked;

let circle;
let dragValue;


export const createCircle = () =>{
    
    document.addEventListener('mousedown', (e)=>{
        circle = document.createElement('div')
        circle.setAttribute('class', 'circle')
        circle.setAttribute('id', 'circle')
        circle.setAttribute('draggable', 'true')
        draggedCircle = circle
        circle.style.background = 'white'
        circle.style.left = e.pageX -25  + 'px'
        circle.style.top = e.pageY -25 + 'px'
        document.body.append(circle)
        
    })
    
}
let draggedCircle;
let boxLoc;
let rect;
let boxTop;
let boxRight;
let boxLeft;
let boxBottom;


export const moveCircle = () =>{
    
let startX = 0;
let startY = 0;


    
    document.addEventListener('mousemove', function(e){
        /*client x is where the mouse is horizontally, clientY is vertically 
        in reference to the viewport or what can be seen on the screen which
        could be anywhere on the html page if you've scrolled down.
        The pagex and y refers to the the coordinates of the mouse event in 
        reference to the whole page no matter how you scrolled, so the 0,0
        point is always at the very top left of the page*/

        //clientX/Y gives the coordinates relative to the viewport in CSS pixels.
        //startx and starty refer to the top left corner of the visible page on the screen
        startX = e.clientX +25 ;
        startY = e.clientY +25 ;
        if(draggedCircle !== null){

            console.log(startX, startY);
        }
        //pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
        //origx and origy refer to the top left corner of the whole html page
         let origX = e.pageX
        let origY = e.pageY
        var deltaX = startX - origX, deltaY = startY - origY;
        if (draggedCircle !== null){

            draggedCircle.style.left = (e.clientX - deltaX) + "px";
            draggedCircle.style.top = (e.clientY - deltaY) + "px"; 
            console.log(draggedCircle.style.left, draggedCircle.style.top);    
        }

      if(e.clientX -25> rect.x && e.clientY -25>rect.y && e.clientX < rect.right && e.clientY < rect.bottom){
        console.log("object");
        draggedCircle.style.background = ('var(--purple)')
        console.log(draggedCircle.style.background);
        //document.removeEventListener('mousemove')
      }
        
        if (draggedCircle.style.background ===  'var(--purple)'){
            console.log("COLOUR PURPLE");
            console.log(rect.x);
            console.log(e.clientX);
            if (e.clientX-25 <rect.x){
                console.log("entry check");
                draggedCircle.style.left = rect.left  + 'px'
               
            }
            if (e.clientX-25 > rect.right-50){
                draggedCircle.style.left = rect.right - 50 + 'px'
            }
            if (e.clientY-25 < rect.y){
                draggedCircle.style.top = rect.top + 'px'
            }
            if (e.clientY-25 >= rect.bottom-50){
                draggedCircle.style.top = rect.bottom -50 + 'px'
            }
        }
      
    }, true)


   
}



export const setBox = () => {

    let box = document.createElement('box')
    box.setAttribute('class', 'box')
    box.setAttribute('id', 'box')
    document.body.appendChild(box)

    boxLoc = document.getElementById('box')
     rect = boxLoc.getBoundingClientRect()
     boxRight = rect.right
     boxLeft = rect.left
     boxBottom = rect.bottom
     boxTop = rect.top

    console.log(rect);
//     186box top
//  310box bottom
//  542.5box left
//  904.1666870117188box right

}

function rmEL(){

    let body = document.querySelector('body')
    
    document.addEventListener('mousemove', {},true)
    console.log("el removed");
   }