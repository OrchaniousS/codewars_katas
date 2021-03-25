// Link: https://www.codewars.com/kata/5208fc3cb613bc725f000142

const solution = (string,limit) => string.length > limit ? string.substr(0,limit)+'...' : string;