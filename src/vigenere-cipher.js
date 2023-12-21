const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  direct = true;
  constructor(value = true) {
    if (typeof value === 'boolean') {
      this.direct = value;
    }
  }
  encrypt(string, key) {
    if (typeof string !== 'string' || arguments.length < 2) throw new Error('Incorrect arguments!');
    string = string.toLowerCase();
    key = key.toLowerCase();
    const result = [];
    let spaces = 0;
    key = this.__keyRemover(key);
    if (key.length === 0) return this.__retorn(string);
    for (let i = 0; i < string.length; i++) {
      const lI = this.alphabet.indexOf(string[i]);
      const k = (i - spaces) % key.length;
      const kI = this.alphabet.indexOf(key[k]);
      if (lI === -1){
        result.push(string[i]);
        spaces += 1;
      }
      else if (kI === -1) {
        result.push(key);
      }
      else {
        result.push(this.matrix[kI][lI]);
      }
    }
    return this.__retorn(result);
  }
  decrypt(string, key) {
    if (typeof string !== 'string' || arguments.length < 2) throw new Error('Incorrect arguments!');
    string = string.toLowerCase();
    key = key.toLowerCase();
    const result = [];
    let spaces = 0;
    key = this.__keyRemover(key);
    if (key.length === 0) return this.__retorn(string);
    for (let i = 0; i < string.length; i++) {
      let k = (i - spaces) % key.length;
      let kI = this.alphabet.indexOf(key[k]);
      let lI = this.alphabet.indexOf(string[i]);
      if (lI === -1){
        result.push(string[i]);
        spaces += 1;
      }
      else {
        lI = this.matrix[kI].indexOf(string[i]);
        result.push(this.matrix[lI][0]);
      }
    }
    return this.__retorn(result);
  }
  __createMatrix() {
    const res = [];
    for (let i = 0; i < this.alphabet.length; i++) {
      let x = this.alphabet.concat().slice(i);
      for (let j = 0; x.length < this.alphabet.length; j++) {
        x.push(this.alphabet[j]);
      }
      res.push(x);
    }
    return res;
  }
  __keyRemover(key) {
    key = key.split('');
    for (let k = 0; k < key.length; k++) {
      if (this.alphabet.indexOf(key[k]) === -1) {
        key.splice(k, 1);
        k -= 1;
      }
    }
    console.log(key);
    return key;
  }
  __retorn(result) {
    if (!Array.isArray(result)) result = result.split('');
    if (!this.direct) {
      return result.reduce((ac, item) => ac = item + ac, '').toUpperCase();
    }
    else {
      return result.join('').toUpperCase();
    }
  } 
  matrix = this.__createMatrix();
}

module.exports = {
  VigenereCipheringMachine
};
