// Link: https://www.codewars.com/kata/523f5d21c841566fde000009
// Array.diff

// Solution 1

const arrayDiff = (a, b) => a.filter((itemA) => !b.includes(itemA));

// Solution 2 - old one

const arrayDiff = (a, b) => {
  let answer = [];
  if (a.length === 0 || b.length === 0) {
    answer = a;
  } else {
    answer = a.filter((x) => !b.includes(x));
  }
  return answer;
};
