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
   * @constructor
   * @param {TValue} [value] The value of the first element of the stack.
   */
  constructor(value?: TValue) {
    if (value) {
      const node = new Node(value);
      this._top = node;
      this._size = 1;
    } else {
      this._top = null;
      this._size = 0;
    }
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
   * @return {number} the number of element of the stack.
   */
  public get size(): number {
    return this._size;
  }

  /**
   * The push method receives a value and adds it to the "last" of the stack.
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
  }

  /**
   * The pop method removes the element at the "last" of the stack and returns its value.
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
