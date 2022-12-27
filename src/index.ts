import Node from './Node';
/**
 * Stack is a linear data structure that store information in the form of a list.
 * They allow only adding and removing elements under a LIFO pattern (last in, first out).
 * Which means that insertions and deletions are performed at the end, called top of the stack.
 */
class Stack<TValue> {
  private _top: Node<TValue> | null;

  private _size: number;

  /**
   * @constructor Creates a new Stack object
   * @param {...TValue[]} values The values for the stack.
   */
  constructor(...values: TValue[]) {
    this._size = 0;
    values.forEach((v) => this.push(v));
  }

  /**
   * The value of the top element of the stack.
   * @return {TValue} the value of top element of the stack.
   */
  public get top() {
    return this._top?.value || null;
  }

  /**
   * The number of the elements of the stack.
   * @return {number} the number of elements of the stack.
   */
  public get size(): number {
    return this._size;
  }

  /**
   * Creates an array with all the elements of the stack following the LIFO pattern.
   * This method doesn't remove any element.
   * @return {TValue[]} a new array with all the elements of the stack.
   */

  public get toArray(): TValue[] {
    return Array.from(this).filter((v) => v) as TValue[];
  }

  /**
   * The push method receives a value and adds it to the "top" of the stack.
   * @param {TValue} value the next value to add.
   */
  public push(value: TValue) {
    const node = new Node(value);

    if (this._top) {
      const previous = this._top;
      this._top = node;
      this._top.previous = previous;
    } else {
      this._top = node;
    }

    this._size++;

    return this;
  }

  /**
   * The pop method removes the element at the "top" of the stack and returns its value.
   * @return {TValue} the value of the element at the "last" of the stack.
   */
  public pop() {
    const value = this.top;
    if (this._top) {
      this._top = this._top.previous || null;
      this._size--;
    }

    return value;
  }

  [Symbol.iterator]() {
    let node = this._top;

    return {
      next() {
        if (node) {
          const { value } = node;
          node = node.previous;

          return { done: false, value };
        }

        return { done: true, value: undefined };
      },
    };
  }
}

export default Stack;
