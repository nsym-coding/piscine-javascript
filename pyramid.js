function pyramid(char, depth){

    var res = ""

   for (let i = 1; i<= depth; i++){    

        var noOfChar = (2*i)-1
        var noOfSpaces = (depth - i)         
        res += (" ".repeat(noOfSpaces*char.length))    
        res += (char.repeat(noOfChar))
        if (i != depth){
            res += "\n"
        }    
     }
   return res
}