# circular-iterable-array

Yet [another][related] circular array. This one [extends] the [Array] and overrides its [Symbol.iterator] method for an **infinite** (and circular) [for...of] **loop** (use with [**caution**!](#caution)).

[related]: https://www.npmjs.com/search?q=circular+array
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[extends]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends
[Symbol.iterator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
[for...of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

## Install

```
npm i circular-iterable-array
```


## Usage

```js
const Circular = require('circular-iterable-array')
const circular = new Circular(1, 2, 3)
```
```js
// Use just like an Array
circular.push(4)
circular.pop()
```
```js
console.log(circular) // => [1, 2, 3]
```
```js
for (const item of circular) {
  console.log(item)
}
// =>
1
2
3
1
2
3
... (infinite loop)
```
While the for...or loop can still be controlled ([break]/return when needed)...

[break]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break

### **CAUTION**

**DO NOT EXPAND with [spread syntax]**

```js
[...circular]
```
It will result block the thread, leak memory, and ultimately crash.


[spread syntax]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
