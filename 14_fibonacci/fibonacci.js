const fibonacci = function (n) {
  n = Number(n); //4
  if (n < 0) return "OOPS"; //4<0
  if (n === 0) return 0;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
