import { places } from "./where-do-we-go.data.js";



export const explore = () =>{
    let placeSection;
    let placeLocation;  
    let scrollPerSection;
    let sortedPlaces;
    let finalSortedPlaces;
    let scrollable;
    let scrollDirection;
    //need to sort the finalSortedPlaces in order from north to south
  
    //initially sorting them from north to south
    sortedPlaces = places.sort((a,b) =>{
        if (a.coordinates.includes('S')){
            return 1
        }else if (b.coordinates.includes('S')){
            return -1        
        }
        if (parseInt(a.coordinates.slice(0,2)) == parseInt(b.coordinates.slice(0,2))){
            return  (parseInt(b.coordinates.slice(3,5)) - parseInt(a.coordinates.slice(3,5)))
        }else{
            return (parseInt(b.coordinates.slice(0,2)) - parseInt(a.coordinates.slice(0,2)))
        }        
    })

    //sorting the southern values in order
    finalSortedPlaces = sortedPlaces.sort((a,b) =>{
        if (a.coordinates.includes('S') && b.coordinates.includes('S')){
            return a.coordinates.slice(0,2) - b.coordinates.slice(0,2)
        }
    })
    
    
 
    // declare global var for each section

    for (let i =0; i<finalSortedPlaces.length; i++){
       
        console.log(finalSortedPlaces[i].name);
        console.log(finalSortedPlaces[i].coordinates);
    }

   //create the location <a> tag to link to google
 placeLocation = document.createElement('a')
 placeLocation.className = 'location'
 placeLocation.id = 'location'

 //create the direction div
 scrollDirection = document.createElement('div')
 scrollDirection.className = 'direction'
 scrollDirection.id = 'direction'

 
     // loop through the sorted array to create the section elements
     for (let i=0; i<finalSortedPlaces.length; i++){     
        placeSection = document.createElement('section');
        placeSection.id = 'section'
        placeSection.name = finalSortedPlaces[i].name
        placeSection.style.backgroundSize = screen
        placeSection.style.background = `url(./where-do-we-go_images/${imgNameConverter(finalSortedPlaces[i].name)}.jpg)`        
        document.body.appendChild(placeSection) 
        document.body.style.height = '100%' 
        
        

        console.log("checking to see where the each section is",placeSection.offsetTop/2);
    }
   

            console.log(document.querySelectorAll('section')[1]);
            placeSection = document.querySelectorAll('section')
            console.log(placeSection[0]);

            let oldScrollPos = 0;



        /* this event listener checks if a section is visible halfway down the page
         and if it is will change the location info to displauy the info for that location*/
        window.addEventListener('scroll', function(){

        //    for (let i=0; i<placeSection.length; i++){
                
                // if (placeSection[i].getBoundingClientRect().top <window.innerHeight/2 && placeSection[i].getBoundingClientRect().bottom >=0){
                //     placeLocation.textContent = ""
                //     console.log('checkin', placeLocation.textContent);
                    
                //             placeLocation.textContent = `${finalSortedPlaces[i].name}\n${finalSortedPlaces[i].coordinates}`
                //             //placeLocation.setAttribute('href', `https://maps.google.com?q=${finalSortedPlaces[i].coordinates}`)
                            
                  
                //     //maybe pass through the dms version?
                  
                //     console.log('checki final sp',finalSortedPlaces[i].coordinates);
                //             placeLocation.href = `https://www.google.co.uk/maps/place/${finalSortedPlaces[i].coordinates}`
                //            // console.log('checking the href',placeLocation.href);
                //             placeLocation.setAttribute('target', '_blank')
                //             placeLocation.style.color = `${finalSortedPlaces[i].color}`
                //             // console.log('checking href split',placeLocation.href
                //             // .split('%C2%B0')
                //             // .join('°')
                //             // .split('%22')
                //             // .join('"')
                //             // .split('%20')
                //             // .join(' ')
                //             // );
                //             // console.log('checking pl split',placeLocation.textContent.split('\n')[1]);

                //                placeSection[i].append(placeLocation)
                // }
        //    }


        let dLocation = finalSortedPlaces[Math.round(scrollY/window.innerHeight)]
        console.log('checkin', placeLocation.textContent);
        placeLocation.textContent = `${dLocation.name}\n${dLocation.coordinates}`
        placeLocation.style.color = `${dLocation.color}`
        placeLocation.href = `https://www.google.co.uk/maps/place/${dLocation.coordinates}`
        placeLocation.setAttribute('target', '_blank')
        document.body.append(placeLocation)
       
            //checking scroll direction
              // Get the new Value
    let newScrollPos = window.pageYOffset;

    //scrollDirection = document.querySelector('direction')

    //Subtract the two and conclude
    if(oldScrollPos - newScrollPos < 0){
        scrollDirection.textContent=""
         scrollDirection.textContent = 'S'
        // document.body.append(scrollDirection)
        console.log("South");
    } else if(oldScrollPos - newScrollPos > 0){
       scrollDirection.textContent = ""
scrollDirection.textContent = 'N'

        console.log("North");
    }
    document.body.append(scrollDirection)

    // Update the old value
    oldScrollPos = newScrollPos;
        })

        }

/**
 * A function to convert the names of each places into the same format as the image names
 * in place so the actual name of the places in the array are not affected but the pictures
 * can be loaded.
 * @param {the array containing all the places data} inputArr 
 * @returns 
 */
function imgNameConverter(inputArr){
    
        if (inputArr.substring(0, inputArr.indexOf(',')).includes(' ')){
         return inputArr.substring(0, inputArr.indexOf(',')).replaceAll(' ', '-').toLowerCase()
        }else{
           return  inputArr.substring(0, inputArr.indexOf(',')).toLowerCase()
        }
        
}



