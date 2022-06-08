function get(src, path){



    var res = {}
    
    
    if (!path.includes('.')){
        
        res = src[path]
        return res
    }
        var paths = path.split('.')
        console.log(paths);
        for (let i =0; i<paths.length; i++){
           
            src = src[paths[i]]
            if (src === undefined){
                return undefined
            }
        }
        return src

      }