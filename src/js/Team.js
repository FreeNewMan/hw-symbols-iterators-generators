export default class Team {
  constructor() {
    this.chars = [];
    this.current = 0;
  }

  [Symbol.iterator] = function (cntx) {
    return {
      next() {
        return cntx.current < cntx.chars.length
          ? { value: cntx.chars[cntx.current++], done: false }
          : { done: true };
      },
    };
  };

  add(char) {
    this.chars.push(char);
  }

  showNextChar() {
    return this[Symbol.iterator](this).next().value;
  }
}
