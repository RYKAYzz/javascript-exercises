function removeFromArray(arr, ...value) {
  return arr.filter((item) => !value.includes(item));
}
console.log(removeFromArray([1, 2, 3], "1", 3));

// Do not edit below this line
module.exports = removeFromArray;
