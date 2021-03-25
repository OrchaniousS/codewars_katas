// Link: https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
    let answer = 0;
    for(let i=1;i<number;i++){
     answer+= i%3===0 || i%5===0 ? i : 0
    }
    return answer;
  }