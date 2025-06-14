function removeFromArray(arr, value1, value2) {
  result = arr.slice();
  return (results = result.filter((rem) => rem !== value1 && rem !== value2));
}
console.log(removeFromArray([1, 2, 3, 4], 7, 2));

// Do not edit below this line
module.exports = removeFromArray;
