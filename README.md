# iterable-stack

Simple Stack data structure with ES6 *iterable* interface

Stack is a linear data structure that store information in the form of a list. They allow only adding and removing elements under a LIFO pattern (last in, first out). Which means that insertions and deletions are performed at the end, called top of the stack.

## Install

```bash
npm install iterable-stack
```

## Usage

### Create a new Stack object

You can create an empty stack.

```javascript
import Stack from 'stack';

const stack = new Stack();
```

And you can create an stack with elements.

```javascript
import Stack from 'stack';

const stack = new Stack(1, 2, 3);
```

### Add (push) new elements to the Stack

You can use the `push` method to add a new element;

```javascript
const stack = new Stack('A', 'B', 'C');

stack.push('D');

stack.size // 4
```

It supports chaining mechanism:

```javascript
const stack = new Stack();

stack.push('A').push('B').push('C');

stack.size // 3
```
### Remove (pop) elements from the Stack

You can use the `pop` method to get and remove the last added element of the Stack.

```javascript
import Stack from 'stack';

const stack = new Stack('A', 'B', 'C') // size = 3;
stack.pop() // 'C' and size = 2
```

### Access to the top value:

Another way to get the top values is with the property `top`.

```javascript
import Stack from 'stack';

const stack = new Stack('A', 'B', 'C') // size = 3;
stack.top // 'C'.
```

### From stack to array.

The stack object has a property called `toArray` that returns an new array based on the elements of the stack.

```javascript
import Stack from 'stack';

const stack = new Stack('A', 'B', 'C') // size = 3;
stack.toArray // ['C', 'B', 'A'].
```

If you want to implement more actions or transform the Stack object into another kind of iterable, please read the section below.
### Iterable

The Stack object is an iterable, because implements the `[Symbol.iterator]()` protocol, that means that you can perform any actions with constructs.
NOTE: this methods don't remove any element of the stack.

*Destructuring*:

```javascript
const stack = new Stack(1).push(2).push(3);
const [first, second, third] = stack;

// first = 3
// second = 2
// third = 1
```

*For of loop*:

```javascript
const stack = new Stack(1, 2, 3);

for (const iterator of stack) {
  // code
}
```

*Array.from*:

```javascript
const stack = new Stack(1).push(2).push(3);

Array.from(stack) // [3, 2, 1]
```

*Spread operator*:

```javascript
const stack = new Stack(1).push(2).push(3);

[...stack] = [3, 2, 1];
```

*Constructor of Set*:

```javascript
const stack = new Stack(1);
const set = new Set(stack);

set.has(1) // true
```

*Promise.all*:

```javascript
const promise = new Promise((resolve) => resolve(1));
const stack = new Stack(promise);

Promise.all(stack); // resolves to [1]
```

*Promise.race*:

```javascript
const promise = new Promise((resolve) => resolve(1));
const stack = new Stack(promise);

Promise.race(stack); // resolves to 1
```

## API

### top

`top` - return the value of the top element of the stack

### size

`size` - return the number of element of the stack.

### toArray

`toArray` - return a new array with al the element of the stack

### push

`push(value)` - the push method receives a value and adds it to the "top" of the stack.

### pop

`pop` - The pop method removes the element at the "top" of the stack and returns its value.

## License

MIT © Gerardo Manuel Chávez Larios <contact@gerrylarios.com> 
