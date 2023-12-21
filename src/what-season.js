const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = null) {
  if (date === null) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  //if (typeof date.setDate() === 'undefined') throw new Error('Invalid date!');
  try {
    date.setMonth(date.getMonth());
  }
  catch(e) {
    throw new Error('Invalid date!');
  }
  let m = date.getMonth();
  if (m > 1 && m < 5) return 'spring';
  if (m > 4 && m < 8) return 'summer';
  if (m > 7 && m < 11) return 'autumn';
  if (m > 12) throw new Error('Invalid date!');
  else return 'winter';
}

module.exports = {
  getSeason
};
