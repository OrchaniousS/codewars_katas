// Link: https://www.codewars.com/kata/520d9c27e9940532eb00018e

const solution = (...a)=> a.map((item,j)=>{
    for(let i=0;i<a.length;i++){if(i!==j && item === a[i]){return true;}}
  }).join('') === '' ? false : true;