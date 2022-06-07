function round(num){

    if (num ===0){
        return 0
    }else if (num > 0 && modulo(num, 1) !== 0){
        if(modulo(num, 1) >= 0.5){
            return (num-modulo(num, 1)) + 1
        }else if(modulo(num, 1) < 0.5){
            return num -modulo(num, 1)
        }
    }else if (num<0){
        num = Math.abs(num)
        if (modulo(num, 1) !== 0){
            if (modulo(num ,1) >= 0.5){
                return -Math.abs(((num-modulo(num, 1)) + 1))
            }else if (modulo(num, 1) < 0.5){
                return -Math.abs(num-modulo(num, 1))
            }
        }

        return num
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
    
    }else if (a < 0){
        a = Math.abs(a)
        for (;a>0;){
            res = (a-=b)           
        }
        return -Math.abs(res)
    }
}

function floor(num){
    if (num === 0){
        return 0
    }else if (modulo(num, 1) === 0){
        return num
    }else if (modulo(num, 1) !== 0 && num > 0){
        return (num-modulo(num, 1))
    }else if (num < 0){
        num = Math.abs(num)
        if (modulo(num, 1) !== 0){
            return -Math.abs(num-modulo(num, 1)+1)
        }else if (modulo(num, 1) === 0){
            return -Math.abs(num)
        }

    }
}

function trunc(num){
    if (num === 0){
        return 0
    }else if (modulo(num, 1) === 0){
        return num
    }else if (modulo(num, 1) !== 0 && num > 0){
        return num - modulo(num, 1)
    }else if (num < 0){
        num = Math.abs(num)
        return -Math.abs(num - modulo(num, 1))
    }
}

function ceil(num){
    if (num === 0){
        return 0
    }else if (modulo(num, 1) === 0 && num > 0){
        return num
    }else if (modulo(num, 1) !== 0 && num > 0){
        return ((num - modulo(num , 1)) + 1)
    }else if (num < 0){
        num = Math.abs(num)       
         if (modulo(num, 1) !== 0){
             return -Math.abs((num-modulo(num, 1)))
            }else if (modulo(num, 1) === 0){
            return -Math.abs(num)
    }
}
}