// Does my number look big in this?
// Link: https://www.codewars.com/kata/5287e858c6b5a9678200083c

// [Version A]

function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function (p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}

// [Version B]

const narcissistic = (value) => {
  let answer = 0;
  let limit = value.toString().length;
  let valueMap = value.toString().split("");
  valueMap.map((item) => (answer += Math.pow(Number(item), limit)));
  return value === answer;
};

// [Version C]

const narcissistic = (value) => {
  const valArray = value.toString().split("");
  const valueLength = value.toString().split("").length;
  let result = 0;

  for (let i = 0; i < valueLength; i++) {
    result += Math.pow(valArray[i], valueLength);
  }

  return value === result;
};
