// https://adventofcode.com/2022/day/20
export const title2022_20 = "grove positioning system";

class Node {
  value: number;
  addOrder: number;
  next: Node;
  prev: Node;

  constructor(value: number) {
    this.value = value;
    this.addOrder = null;
    this.next = null;
    this.prev = null;
  }

  unlink() {
    this.prev.next = this.next;
    this.next.prev = this.prev;

    return this;
  }
}

class CyclicalList {
  size: number;
  cursor: Node;

  constructor(values = []) {
    this.size = 0;
    this.cursor = null;

    for (let value of values) {
      this.add(value);
    }
  }

  add(value: number) {
    const node = new Node(value);

    this.size++;
    node.addOrder = this.size;

    if (!this.cursor) {
      node.next = node.prev = this.cursor = node;
    } else {
      node.next = this.cursor;
      node.prev = this.cursor.prev;
      node.prev.next = node;
      this.cursor.prev = node;
    }
  }

  insert(node: Node) {
    if (!this.cursor) return undefined;
    this.size++;

    node.next = this.cursor.next;
    this.cursor.next = node;
    node.prev = this.cursor;
    node.next.prev = node;

    return this;
  }

  remove() {
    if (!this.cursor) return undefined;
    this.size--;
    if (this.size === 0) {
      this.cursor = null;
      return null;
    } else {
      const node = this.cursor;
      this.cursor = this.cursor.next;
      return node.unlink();
    }
  }

  move(steps: number) {
    const node = this.remove();
    return this.rotate(steps - 1).insert(node); // TODO: remove the -1 to make this a bit more obvious
  }

  mix() {
    let mixed = 1;

    while (mixed <= this.size) {
      while (this.cursor.addOrder !== mixed) {
        this.cursor = this.cursor.next;
      }
      this.move(this.cursor.value);
      mixed++;
    }

    return this;
  }

  rotate(steps: number) {
    let offset = steps % this.size;

    if (offset > 0) {
      while (offset--) this.cursor = this.cursor.next;
    } else if (offset < 0) {
      while (offset++) this.cursor = this.cursor.prev;
    }

    return this;
  }

  zero() {
    while (this.cursor.value !== 0) {
      this.cursor = this.cursor.next;
    }

    return this;
  }

  toArray() {
    const items = [];
    if (!this.size) return items;

    let node = this.cursor;
    for (let i = 0; i < this.size; i++) {
      items.push(node.value);
      node = node.next;
    }

    return items;
  }
}

export function problem2022_20_1(input: string[]) {
  const fileNumbers = input.map(Number);
  const list = new CyclicalList(fileNumbers);

  const coord1 = list.mix().zero().rotate(1000).cursor.value;
  const coord2 = list.zero().rotate(2000).cursor.value;
  const coord3 = list.zero().rotate(3000).cursor.value;

  return coord1 + coord2 + coord3;
}

export function problem2022_20_2(input: string[]) {}
