const palindromes = function (str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  if (clean === reversed) return true;
  else return false;
};

// Do not edit below this line
module.exports = palindromes;
