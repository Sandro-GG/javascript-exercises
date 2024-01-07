const palindromes = function (string) {
  return string.toLowerCase().replace(/[^a-z0-9]/g, "") === string.toLowerCase().replace(/[^a-z0-9]/g, "").split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
