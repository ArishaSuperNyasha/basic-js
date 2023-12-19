const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (this.length === 0) this.chain = [];
    value = String(value);
    this.chain.push(`( ${value} )`);
    this.length += 1;
    return this;
  },
  removeLink(position) {
    if ((typeof position !== 'number') || 
        (position > this.length) || 
        (position < 1)) {
          this.chain = [];
          this.length = 0;
          throw new Error('You can\'t remove incorrect link!');
        }
    else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    const arr = this.chain;
    let newChain = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      newChain.push(arr[i]);
    }
    this.chain = newChain;
    return this;
  },
  finishChain() {
    const res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
