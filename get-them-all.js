let architectList = []
let isClassicalArchitect = []
let activeClassicalArchitect = []

export const getBonannoPisano = () => {

  
    let notBP = []
   let bp = document.getElementById("BonannoPisano")
    let bpArr = []
    for (let i = 0; i<activeClassicalArchitect.length; i++){
        if (activeClassicalArchitect[i].id !== "BonannoPisano"){
            notBP.push(activeClassicalArchitect[i])
        }
    }

    console.log(bpArr, notBP);
    return [bp, notBP]

}
export const getActive = () => {

    let notActiveClassicalArchitect = []

    for (let i =0; i<isClassicalArchitect.length; i++){
        if (isClassicalArchitect[i].className === "classical active"){
            activeClassicalArchitect.push(isClassicalArchitect[i])
        }else{
            notActiveClassicalArchitect.push(isClassicalArchitect[i])
        }
    }

    console.log(activeClassicalArchitect);
    return [activeClassicalArchitect, notActiveClassicalArchitect]
    
}

export const getArchitects = () => {
   //let architects = []
   const isArchitect = document.getElementsByTagName('a')
   const notArchitect = document.getElementsByTagName('span')
   console.log(isArchitect);
   architectList = Array.from(isArchitect)
   const notArchitectList = Array.from(notArchitect)

   
   
   console.log(architectList);
   
   return [architectList, notArchitectList]
   
}
getArchitects()

export const getClassical = () => {
   
    
    
    
    
    
    const isNotClassicalArchitect = []
   
    
   
    
    for (let i = 0; i<architectList.length; i++){
        if (architectList[i].className === "classical " || architectList[i].className === "classical active"){
            
            isClassicalArchitect.push(architectList[i])
        }else{
            isNotClassicalArchitect.push(architectList[i])
        }
    }
    // const notArchitectList = Array.from(notArchitect)
    
    
   
 
    console.log(isClassicalArchitect);
    console.log(isNotClassicalArchitect);
    
    
    // const classicalList = Array.from(isClassicalArchitect)
    // const notClassicalList = Array.from(isNotClassicalArchitect)
    
    return [isClassicalArchitect, isNotClassicalArchitect]
}
