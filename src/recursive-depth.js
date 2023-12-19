const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  results = [];
  truearr = 0;
  calculateDepth(arr, c = 1) {
    if (c === 1) this.truearr = arr;
    let count = c;
    for (let i of arr) {
      if (Array.isArray(i)) {
        this.calculateDepth(i, count + 1);
      }
    }
    this.results.push(count);

    if (arr === this.truearr) {
      const r = Math.max(...this.results);
      this.results = [];
      return r;
    }
  }
}

module.exports = {
  DepthCalculator
};
