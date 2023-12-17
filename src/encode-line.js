const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    number = f(str, i);
    result += `${number}${str[i]}`
    i += number - 1;
  }

  function f (s, indx, num = 1) {
    if (s[indx + 1] === s[indx]) {
      return f(s, indx + 1, num + 1);
    }
    else return num;
  }
  return result.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
