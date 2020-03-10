// JavaScript arrays are objects which have squential integers starting at 0 as the key.

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length];
    this.length--;
  }

  shiftRight(index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = null;
    this.length++;
  }

  delete(index) {
    const deletedItem = this.data[index];
    this.shiftLeft(index);
    return deletedItem;
  }

  insert(index, item) {
    this.shiftRight(index);
    this.data[index] = item;
    return this.length;
  }
}

// Testing the arrray methods.

const newArray = new MyArray();

newArray.push('Let');
newArray.push('it');
newArray.push('be');
newArray.push('!');
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.insert(0, 'please!');
newArray.insert(0, 'Please');
console.log(newArray);
newArray.delete(1);
console.log(newArray);