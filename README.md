# multi-matrix

Creates N dimensional matrix

---

## Install

```
npm i -S multi-matrix
// yarn add multi-matrix
```

## Usage

```js
const { matrix } = require('multi-matrix')

matrix(2).forEach(([x]) => console.log(x));
matrix(2, 2).forEach(([x, y]) => console.log(x, y));
matrix(2, 2, 2).forEach(([x, y, z]) => console.log(x, y, z));
matrix(2, 2, 2, 2).forEach(([x, y, z, n]) => console.log(x, y, z, n));
matrix(2, 2, 2, 2, 2).forEach(([x, y, z, n1, n2]) => console.log(x, y, z, n1, n2));

matrix(2).map(([x]) => ({ x }));
matrix(2, 2).map(([x, y]) => ({ x, y }));
matrix(2, 2, 2).map(([x, y, z]) => ({ x, y, z }));
matrix(2, 2, 2, 2).map(([x, y, z, n]) => ({ x, y, z, n }));
matrix(2, 2, 2, 2, 2).map(([x, y, z, n1, n2]) => ({ x, y, z, n1, n2 }));
```