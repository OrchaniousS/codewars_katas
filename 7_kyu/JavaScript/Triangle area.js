// Link: https://www.codewars.com/kata/59bd84b8a0640e7c49002398
// Triangle area
const tArea = (str) =>
  Math.pow(str.split("\n").filter((i) => i !== "").length - 1, 2) / 2;
