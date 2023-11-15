const removeFromArray = function(array, ...elements) {
  let howMany = arguments.length - 1;
  console.log(howMany);
  if (howMany === 1) {
    for (let i of array) {
      if (array[i - 1] === arguments[1]) {
        array.splice(i - 1, 1);
        break;
      }
    }
  } else {
    let i = 0;
    while (i < howMany) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] === arguments[i + 1]) { 
          array.splice(j, 1);
          break;
        }
      }
      i++;
    }
  }
  return array;
};

// way simpler solution:
// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }

// Do not edit below this line
module.exports = removeFromArray;
