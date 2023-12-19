const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(ar) {
  if (!Array.isArray(ar)) throw new Error("'arr' parameter must be an instance of the Array!");
  let arr = ar.concat();
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      if (arr[i].match(/double/)) {
        if (arr[i].match(/next/)) {
          if (i + 1 >= arr.length) arr.splice(i, 1);
          else arr.splice(i, 1, arr[i+1]);
        }
        else if (arr[i].match(/prev/)) {
          if (i - 1 < 0) arr.splice(i, 1);
          else arr.splice(i, 1, arr[i-1]);
        }
      }
      else if (arr[i].match(/discard/)) {
        if (arr[i].match(/next/)) {
          if (i + 1 >= arr.length) arr.splice(i, 1, 'del');
          else arr.splice(i, 2, 'del');
        }
        else if (arr[i].match(/prev/))  {
          if (i - 1 < 0) arr.splice(i, 1, 'del');
          else arr.splice(i - 1, 2, 'del');
        }
      }
    }
  }
  return arr.length > 0 ? arr.filter((a) => a !== 'del') : [];
}

module.exports = {
  transform
};
