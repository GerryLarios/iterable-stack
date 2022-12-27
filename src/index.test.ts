/* eslint-disable no-magic-numbers */
import Stack from './index';

describe('Stack', () => {
  it('should show the size at 0', () => {
    const stack = new Stack<number>();
    expect(stack.size).toBe(0);
  });

  it('it should return null if there are no values', () => {
    const stack = new Stack<number>(1);

    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });

  it('should follows the LIFO pattern', () => {
    const stack = new Stack<number>();

    const size = 5;
    for (let i = 1; i <= size; i++) {
      stack.push(i);
    }

    expect(stack.size).toBe(size);
    for (let i = size; i >= 1; i--) {
      expect(stack.pop()).toBe(i);
    }

    expect(stack.size).toBe(0);
  });
});
