const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newM = [];
  for (let stroke = 0; stroke < matrix.length; stroke++) {
    newM.push([]);
    for (let i = 0; i < matrix[stroke].length; i++) {
      let l1 = l2 = l3 = r1 = r2 = r3 = s1 = s3 = 0;
      if (i < matrix[stroke].length - 1) {
        if (stroke < matrix.length - 1) {
          r3 = matrix[stroke + 1][i + 1] ? 1 : 0;
        }
        if (stroke > 0) {
          r1 = matrix[stroke - 1][i + 1] ? 1 : 0;
        }
        r2 = matrix[stroke][i + 1] ? 1 : 0;
      }
      if (i > 0) {
        if (stroke < matrix.length - 1) {
          l3 = matrix[stroke + 1][i - 1] ? 1 : 0;
        }
        if (stroke > 0) {
          l1 = matrix[stroke - 1][i - 1] ? 1 : 0;
        }
        l2 = matrix[stroke][i - 1] ? 1 : 0;
      }
      if (stroke < matrix.length - 1) {
        s3 = matrix[stroke + 1][i] ? 1 : 0;
      }
      if (stroke > 0) {
        s1 = matrix[stroke - 1][i] ? 1 : 0;
      }
      newM[stroke].push(l1 + l2 + l3 + r1 + r2 + r3 + s1 + s3);
    }
  }
  return newM;
}

module.exports = {
  minesweeper
};
