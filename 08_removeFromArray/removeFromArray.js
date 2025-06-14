function removeFromArray(arr, ...value) {
  return arr.filter((item) => !value.includes(item));
}
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));

// Do not edit below this line
module.exports = removeFromArray;
