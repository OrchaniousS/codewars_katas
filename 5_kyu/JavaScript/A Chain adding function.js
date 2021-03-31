// Link:https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

const add = n => {
    const x = x=>add(x+n);
    x.valueOf = ()=> n
    return x
  }