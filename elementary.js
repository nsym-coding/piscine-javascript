function multiply(a, b){
    var res = 0
    if (a === 0 || b === 0){
        return res
    }  else if (a>0 && b>0){

        for(;b>0;){
            res += a
            b--
        }
        return res
    }else if (a<0 && b>0){
        a = Math.abs(a)
        for(;b>0;){
            res += a
            b--
        }
        return -Math.abs(res)

    }else if (a<0 && b<0){
        a = Math.abs(a)
        b = Math.abs(b)
        for(;b>0;){
            res += a
            b--
        }
        return res
    }else if (a>0 && b<0){
        b = Math.abs(b)
        for(;b>0;){
            res += a
            b--
        }
        return -Math.abs(res)
    }
}

function divide(a, b){
    var count = 0
    if (a<b && a>0){
        return 0
    }else if(a > 0 && a> b && b >0){
        for (;a>0 && a>b;){
            a-=b
            count += 1
        }
        return count
    }else if (a<0 && b >0){
        a = Math.abs(a)
        for (;a>0 && a>b;){
            a-=b
            count += 1
        }
        return -Math.abs(count)
    }else if (a>0 && b<0){
        b = Math.abs(b)
        for (;a>0 && a>b;){
            a-=b
            count += 1
        }
        return -Math.abs(count)
    }else if (a<0 && b <0){
        a = Math.abs(a)
        b = Math.abs(b)
        for (;a>0 && a>b;){
            a-=b
            count += 1
        }
        return count
    }


   
}

function modulo(a, b){
    var res = 0    
    if (a>0 && a>b && b>0){

        for (;a>0 && a>b;){
            res = (a-=b)
           
        }
        return res
    }else if (a<b && a>0){
        return a
    }else if (a > 0 && b<0){
        b = Math.abs(b)
        for (;a>0 && a>b;){
            res = (a-=b)          
        }
        return Math.abs(res)
    }else if (a < 0 && b>0){
        a = Math.abs(a)
        for (;a>0 && a>b;){
            res = (a-=b)           
        }
        return -Math.abs(res)
    }else if(a<0 && b<0){
        a = Math.abs(a)
        b = Math.abs(b)
        for (;a>0 && a>b;){
            res = (a-=b)           
        }
        return -Math.abs(res)

    }
}