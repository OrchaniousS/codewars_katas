// Link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56

const validBraces = (str) => {
    const result = [];
    
    const openB  = ['(','{','['];
    const closeB = [')','}',']'];
    
    for(char of str){
      if(openB.includes(char)){
        const brace = closeB[openB.indexOf(char)];
        result.push(brace);
      } else{
        const lastBrace = result.pop();
        if(char !== lastBrace){
          return false;
        }
      }
    }
      return result.length === 0;
  }