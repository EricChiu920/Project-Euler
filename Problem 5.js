const { performance } = require('perf_hooks');
// Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

function checkDivided(x, num) {
  for (let i = num; i > 1; i -= 1) {
    if (x % i !== 0) {
      return false;
    }
  }

  return true;
}

function smallestMultiple(num = 20) {
  let pass = false;
  let multiple = 0;

  while (!pass) {
    multiple += 19; // Instead of checking if a multiple passes 1 by 1, we can check by the largest divisor: 20 to check fewer numbers.
    pass = checkDivided(multiple, num); // I chose 19 instead since it's the largest prime number below 20. Need to check for prime numbers if you want a general solution.
  }

  return multiple;
}

console.log(smallestMultiple());

const runs = 100;

const t0 = performance.now();
for (let i = 0; i < runs; i += 1) {
  smallestMultiple();
}
const t1 = performance.now();
console.log(`Simple took ${(t1 - t0) / runs} milliseconds`);
