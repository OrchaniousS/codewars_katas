// Link: https://www.codewars.com/kata/514a024011ea4fb54200004b
// Extract the domain name from a URL

// Solution 1

const domainName = (url) => {
  if (
    url.split(".")[0].split("www")[0].split("https://")[0].split("http://")[0]
  ) {
    return url
      .split(".")[0]
      .split("www")[0]
      .split("https://")[0]
      .split("http://")[0];
  }
  if (url.split("www.").length > 1) {
    return url.split("www.")[1].split(".")[0];
  }
  if (url.split("https://").length > 1) {
    return url.split("https://")[1].split(".")[0];
  }
  if (url.split("http://").length > 1) {
    return url.split("http://")[1].split(".")[0];
  }
};

// Solution 2
const domainName = (url) => {
  let con = (x) => console.log(x);
  let s = (u) => url.split(u);
  let uLen = (u) => u.length != 1;

  if (uLen(s("//"))) {
    url = s("//")[1];
    if (uLen(s("."))) {
      url = s(".")[0] === "www" ? s(".")[1] : s(".")[0];
    }
    if (uLen(s("www."))) {
    }
  } else if (uLen(s("www."))) {
    url = s("www.")[1].split(".")[0];
  } else {
    if (s(".")) {
      url = s(".")[0];
    }
  }

  return url;
};
