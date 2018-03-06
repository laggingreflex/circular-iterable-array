module.exports = class extends Array {
  constructor(...items) {
    super(...items)
  }
  [Symbol.iterator]() {
    let i = -1;
    return {
      next: () => ({
        value: this[i = (i + 1) % this.length],
        done: false,
      })
    }
  }
};
