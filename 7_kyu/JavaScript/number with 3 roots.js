// Link: https://www.codewars.com/kata/5932c94f6aa4d1d786000028

function perfectRoots(n){
    let treesome = 0;
    while(Number.isInteger(Math.sqrt(n))){
      if(treesome===3){break}
      n = Math.sqrt(n);
      treesome++;
   }
  return treesome === 3;
 }