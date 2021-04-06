// Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b

const towerBuilder = nFloors =>{
    let arr = [];
    let text  = '*'
    let space = ' '
    
    for(var i=1;i<=nFloors;i++){
    var text2='';
      text2+=space.repeat(nFloors-i)
      text2+=text.repeat(i===1?i:i*2-1)
      text2+=space.repeat(nFloors-i)
      arr.push(text2)
    }
    return arr
  }