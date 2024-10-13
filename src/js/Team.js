export default class Team {
  constructor() {
    this.chars = [];
    this.nextIndex = 0;
  }

  add(char) {
    this.chars.push(char);
  }

  showNextChar() {
    let cntx = this;
    return ({
      next: function () {
        return cntx.nextIndex < cntx.chars.length
          ? { value: cntx.chars[cntx.nextIndex++], done: false }
          : { done: true };
      },
    }).next().value;
  }
}

