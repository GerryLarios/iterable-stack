/* eslint-disable no-magic-numbers */
import Node from './index';

describe('Node', () => {
  it('should store the node value', () => {
    const node = new Node(1);

    expect(node.value).toBe(1);
  });

  it('should store the previous value', () => {
    const node = new Node(1);
    node.previous = new Node(2);

    expect(node.previous?.value).toBe(2);
  });
});
