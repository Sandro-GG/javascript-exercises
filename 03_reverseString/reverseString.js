const reverseString = function(string) {
  let reversedString = '';
  const splitString = string.split('');
  const reversedArray = splitString.reverse();
  reversedString = reversedArray.join('');
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
