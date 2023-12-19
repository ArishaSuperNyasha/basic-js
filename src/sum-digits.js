const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  function sum(n) {
    const arr = String(n).split('');
    let res = 0
    for (let i of arr) {
      res += (parseInt(i) || 0);
    }
    if (res > 9) return sum(res, 0);
    else return res;
  }

  return sum(n);
}

module.exports = {
  getSumOfDigits
};
