const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let a = String(n).split('');

  function f (arr, x = 0) {
    if (arr[x] < arr[x + 1]) {
      arr.splice(x, 1);
      return Number(arr.join(''));
    }
    else {
      if (x === arr.length - 2) {
        arr.splice(x + 1, 1);
        return Number(arr.join(''));
      }
      return f(arr, x + 1);
    }
  }

  return f(a);
}

module.exports = {
  deleteDigit
};
