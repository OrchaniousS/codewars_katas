// Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
    var results = [];
    for(var i=0; i<arr.length; i++){
    if (count(results, arr[i])<n) {
      results.push(arr[i]);
    }
  }
  return results;
  }
  
  function count(array, givenElement){
    var count =0;
    for (var i=0; i<array.length; i++){
      if (array[i]===givenElement){
        count++;
      }
    }
    return count;
  }