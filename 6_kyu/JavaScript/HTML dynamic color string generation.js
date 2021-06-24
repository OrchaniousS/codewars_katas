// HTML dynamic color string generation
// Link: https://www.codewars.com/kata/56f1c6034d0c330e4a001059

var generateColor = function() {
    let result='#';
    let chars  = 'ABCDEFabcdef0123456789';
    for(var i=0;i<6;i++){
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result
  };