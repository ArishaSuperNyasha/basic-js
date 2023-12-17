const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */function getDNSStats(domains) {
  const results = {};
  for (let item of domains) {
    let x = item.split('.');
    x = x.map((i) => `.${i}`);
    for (let i = x.length - 1; i >= 0; i--) {
      let dom = chain(x, i)
      if (dom in results) {
        results[dom] += 1;
      }
      else {
        results[dom] = 1;
      }
    }
  }
  
  function chain (arr, indx) {
    const last = arr.length - 1;
    let str = '';
    for (let n = last; n >= indx; n--) {
      str = str + arr[n];
    }
    return str;
  }
  
  return results;
}

module.exports = {
  getDNSStats
};
