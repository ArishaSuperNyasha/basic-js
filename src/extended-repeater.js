const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  if (typeof str === 'object' || typeof options.separator === 'object' ) {
    str = '' + str;
    options.addition = '' + options.addition;
  }
  if (!options.repeatTimes) {
    if (!options.addition) return str;
    return str + options.addition;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    if (typeof options.addition !== 'undefined') {
      let isCount = options.additionRepeatTimes || 1;
      for (let y = 0; y < isCount; y++) {
        result += options.addition;
        if (y !== options.additionRepeatTimes - 1) {
          if (typeof options.additionSeparator !== 'undefined') {
            result += options.additionSeparator;
          }
          else if (typeof options.additionRepeatTimes !== 'undefined') {
            result += '|';
          }
        }
      }
    }
    if (i !== options.repeatTimes - 1) {
      if (options.separator) {
        result += options.separator;
      }
      else {
        result += '+';
      }
    }
  }
  return result;
}

module.exports = {
  repeater
};
