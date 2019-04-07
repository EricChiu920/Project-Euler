// Truncatable primes

// Problem 37
// The number 3797 has an interesting property.Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

const { isPrime } = require('./exports');

function checkTruncatable(n) {
  const str = String(n);

  // truncate left digits
  for (let i = 0; i < str.length; i += 1) {
    const temp = Number(str.substring(i));
    if (!isPrime(temp)) {
      return false;
    }
  }

  // truncate right digits
  for (let i = 0; i < str.length; i += 1) {
    const temp = Number(str.substring(0, str.length - i));
    if (!isPrime(temp)) {
      return false;
    }
  }

  return true;
}

function truncatablePrimes() {
  let count = 0;
  const arr = [];

  let i = 11;
  while (count < 11) {
    if (checkTruncatable(i)) {
      count += 1;
      arr.push(i);
    }

    i += 2;
  }

  return arr.reduce((prev, curr) => prev + curr, 0);
}

console.log(truncatablePrimes());
