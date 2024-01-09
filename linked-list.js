class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.tail = this.head = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let node = this.head;
    for (let i = 1; i <= index; ++i) {
      node = node.nextNode;
    }

    return node;
  }

  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let node = this.head;
      this.head = this.tail = null;
      this.length--;
      return node;
    }
    let prevNode = this.head;
    let tail = this.tail;
    for (let i = 1; i < this.length - 1; ++i) {
      prevNode = prevNode.nextNode;
    }
    this.tail = prevNode;
    this.length--;
    return tail;
  }

  contains(value) {
    let node = this.head;
    for (let i = 0; i <= this.length - 1; ++i) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }

  find(value) {
    let node = this.head;
    for (let i = 0; i <= this.length - 1; ++i) {
      if (node.value === value) return i;
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    let node = this.head;
    let string = String(`( ${this.head.value} ) ->`);
    for (let i = 1; i <= this.length - 1; ++i) {
      node = node.nextNode;
      string += ` ( ${node.value} ) ->`;
    }
    string += ' null';
    return string;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
