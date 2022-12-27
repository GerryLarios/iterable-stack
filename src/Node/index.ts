/* eslint-disable no-use-before-define */
class Node<TValue> {
  private _previous: Node<TValue> | null;

  private _value: TValue;

  constructor(value: TValue) {
    this.value = value;
    this._previous = null;
  }

  public get previous(): Node<TValue> | null {
    return this._previous;
  }

  public set previous(node: Node<TValue> | null) {
    this._previous = node;
  }

  public set value(value: TValue) {
    this._value = value;
  }

  public get value(): TValue {
    return this._value;
  }
}

export default Node;
