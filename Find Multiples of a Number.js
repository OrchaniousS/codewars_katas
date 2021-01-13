const findMultiples = (integer, limit) => {
    let arr = [integer]
    let temp=integer
    for(let i=1;i<parseInt(limit/integer);i++){
      temp += integer
      arr[i] = temp
    }
   return arr
  }