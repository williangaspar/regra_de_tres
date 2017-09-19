function regra(n) {
  if (!n[0] || !n[3]) {
    return n[1] * n[2] / (n[3] + n[0]);
  } else if (!n[1] || !n[2]) {
    return n[0] * n[3] / (n[1] + n[2]);
  } else {
    return "";
  }
}

if (typeof module != "undefined")
  module.exports = regra;
