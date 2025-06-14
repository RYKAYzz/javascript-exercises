function removeFromArray(arr, value) {
  result = arr.slice();
  return (results = result.filter((rem) => rem !== value));
}
console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
