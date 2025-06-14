function sumAll(firstInteger, secondInteger) {
  let sum = 0;
  if (!Number.isInteger(firstInteger) || !Number.isInteger(secondInteger)) {
    return "ERROR";
  }

  if (firstInteger < 1 || secondInteger < 1) {
    return "ERROR";
  }

  if (firstInteger > secondInteger) {
    [firstInteger, secondInteger] = [secondInteger, firstInteger];
  }

  for (let i = firstInteger; i <= secondInteger; i++) {
    // declare num properly
    sum += i;
  }
  return sum;
}
sumAll(-1, -21);

// Do not edit below this line
module.exports = sumAll;
