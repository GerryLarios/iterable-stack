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

  it('it should return an array', () => {
    const stack = new Stack(1, 2, 3);

    expect(stack.toArray).toStrictEqual([3, 2, 1]);
  });

  it('should be an iterable - construct: destructuring', () => {
    const stack = new Stack(1).push(2).push(3);

    const [first, second, third] = stack;
    expect(first).toBe(3);
    expect(second).toBe(2);
    expect(third).toBe(1);
  });

  it('should be an iterable - construct: for-of loop', () => {
    const stack = new Stack(1);

    for (const iterator of stack) {
      expect(iterator).toBe(1);
    }
  });

  it('should be an iterable - construct: Array.from', () => {
    const stack = new Stack(1).push(2).push(3);

    expect(Array.from(stack)).toStrictEqual([3, 2, 1]);
  });

  it('should be an iterable - construct: spread operator', () => {
    const stack = new Stack(1).push(2).push(3);

    expect([...stack]).toStrictEqual([3, 2, 1]);
  });

  it('should be an iterable - construct: constructors of Set', () => {
    const stack = new Stack(1);
    const set = new Set(stack);

    expect(set.has(1)).toBeTruthy();
  });

  it('should be an iterable - construct: Promose.all', async () => {
    // eslint-disable-next-line no-promise-executor-return
    const promise = new Promise((resolve) => resolve(1));
    const stack = new Stack(promise);

    await expect(Promise.all(stack)).resolves.toStrictEqual([1]);
  });

  it('should be an iterable - construct: Promose.race', async () => {
    // eslint-disable-next-line no-promise-executor-return
    const promise = new Promise((resolve) => resolve(1));
    const stack = new Stack(promise);

    await expect(Promise.race(stack)).resolves.toBe(1);
  });
});
