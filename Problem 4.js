const { performance } = require('perf_hooks');
// Largest palindrome product

// A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3 - digit numbers.

function largestPalindromeProduct(num = 3) {
  let n = '';

  for (let i = 0; i < num; i += 1) {
    n += '9';
  }
  n = Number(n);

  let fail = false;
  let big = 0;

  for (let i = n; i > n / 2; i -= 1) {
    for (let j = i; j > n / 2; j -= 1) {
      if (i * j < big) { // Don't check if it is a palindrome if it is smaller than the biggest palindrom found already.
        break;
      }
      const a = (i * j).toString();
      const temp = a.split('').reverse().join('');

      if (temp !== a) {
        fail = true;
      }

      if (fail !== true) {
        if (Number(a) > big) {
          big = Number(a);
        }
      }
      fail = false;
    }
  }

  return big;
}
console.log(largestPalindromeProduct());

// const runs = 100;

// const t0 = performance.now();
// for (let i = 0; i < runs; i += 1) {
//   largestPalindromeProduct();
// }
// const t1 = performance.now();
// console.log(`Simple took ${(t1 - t0) / runs} milliseconds`);
