const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let stroke = 0; stroke < matrix.length; stroke++) {
    for (let i = 0; i < matrix[stroke].length; i++) {
      if (stroke === 0) {
        sum += matrix[stroke][i];
      }
      else {
        let upper = matrix[stroke - 1][i];
        if (upper !== 0) sum += matrix[stroke][i];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
