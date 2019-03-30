const { performance } = require('perf_hooks');
// Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(num) {
  const x = Math.floor(Math.sqrt(num));

  if (Math.floor(num) !== num) {
    return false;
  }

  for (let i = 2; i <= x; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num >= 2;
}

function largestPrimeFactor(num = 600851475143) {
  for (let i = Math.floor(Math.sqrt(num)); i > 0 / 2; i -= 1) {
    if (num % i === 0 && isPrime(i)) {
      return i;
    }
  }
}

// Revised version from the overview
function largestPrimeFactorRevised(num = 600851475143) {
  let n = num;
  let factor = 3;
  let lastFactor;

  if (n % 2 === 0) {
    lastFactor = 2;
    n /= 2;
    while (n % 2 === 0) {
      n /= 2;
    }
  } else {
    lastFactor = 1;
  }

  let maxFactor = Math.floor(Math.sqrt(n));

  while (n > 1 && factor <= maxFactor) {
    if (n % factor === 0) {
      n /= factor;
      lastFactor = factor;
      while (n % factor === 0) {
        n /= factor;
      }
      maxFactor = Math.floor(Math.sqrt(n));
    }
    factor += 2;
  }

  if (n === 1) {
    return lastFactor;
  }

  return n;
}
console.log(largestPrimeFactor());

// const runs = 100;

// let t0 = performance.now();
// for (let i = 0; i < runs; i += 1) {
//   largestPrimeFactor();
// }
// let t1 = performance.now();
// console.log(`Simple took ${(t1 - t0) / runs} milliseconds`);

// t0 = performance.now();
// // console.log(problem3Revised());
// for (let i = 0; i < runs; i += 1) {
//   largestPrimeFactorRevised();
// }
// t1 = performance.now();
// console.log(`Revised took ${(t1 - t0) / runs} milliseconds`);
