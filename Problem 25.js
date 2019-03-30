// 1000 - digit Fibonacci number

// Problem 25
// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits ?

const bigInt = require('big-integer');

function fibonacciDigits(num = 1000) {
  let fn;
  let fn1 = 1;
  let fn2 = 1;
  let index = 2; // fn = 2 on the first run, so index = 3.

  while (String(fn).length < num) {
    index += 1;
    fn = bigInt(fn1).add(fn2);
    fn1 = bigInt(fn2);
    fn2 = bigInt(fn);
  }

  return index;
}

console.log(fibonacciDigits());

// const { performance } = require('perf_hooks');

// const runs = 10;
// const t0 = performance.now();
// for (let i = 0; i < runs; i += 1) {
//   fibonacciDigits();
// }
// const t1 = performance.now();
// console.log(`Took ${(t1 - t0) / runs} milliseconds`);
