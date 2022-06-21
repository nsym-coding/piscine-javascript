//pick: contains only those keys which appear in the string or array of strings.
const pick = (inputObj, inputText) =>{

    let res = {}
    
if (inputText instanceof Array === true){

    for (const [key, value] of Object.entries(inputObj)){
        if (inputText.includes(key)){
            Object.assign(res[key]=value)
        }
    }
}

if (typeof inputText === 'string'){
    for (const [key, value] of Object.entries(inputObj)){
        if (inputText === key){
            Object.assign(res[key]=value)
        }
    }
}
return res
}

const omit = (inputObj, inputText) => {
    let res = {}
    
    if (inputText instanceof Array === true){
    
        for (const [key, value] of Object.entries(inputObj)){
            if (!inputText.includes(key)){
                Object.assign(res[key]=value)
            }
        }
    }
    
    if (typeof inputText === 'string'){
        for (const [key, value] of Object.entries(inputObj)){
            if (inputText !== key){
                Object.assign(res[key]=value)
            }
        }
    }
    return res
}
