// Link: https://www.codewars.com/kata/57d165ad95497ea150000020

const bears = (x, s) => {
    let amntPairs = s.match(/8B|B8/g);
    let amntPairsLng = amntPairs ?  amntPairs.length : 0;
    
    return [amntPairs ? amntPairs.join('') : '', amntPairsLng >= x ];
  }