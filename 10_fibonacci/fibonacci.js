const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 1; i < 30; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
