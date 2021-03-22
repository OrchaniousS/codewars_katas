const findMultiples = (integer, limit) => {
    let arr = [integer]
    let temp=integer
    for(let i=1;i<parseInt(limit/integer);i++){
      temp += integer
      arr[i] = temp
    }
   return arr
  }

  // Link => https://www.codewars.com/kata/58ca658cc0d6401f2700045f/javascript