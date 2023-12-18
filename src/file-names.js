const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  for (let item of names) {
    let collect = result.filter((i) => {
      if (i === item) return i;
      if (i.startsWith(item) 
      && i.match(/\d{1}/g).length === 1) return i;
    });
    if (collect.length > 0) {
      result.push(`${item}(${collect.length})`);
    }
    else result.push(item);
  }
  return result;
}

module.exports = {
  renameFiles
};
