const convertToCelsius = function (num) {
  celsius = ((num - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

function convertToFahrenheit(num) {
  Fahrenheit = (num * 9) / 5 + 32;
  return Math.round(Fahrenheit * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
