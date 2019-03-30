// Quadratic primes

// Problem 27
// Euler discovered the remarkable quadratic formula:

// n2 + n + 41
// It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. However, when n = 40, 402 + 40 + 41=40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 412 + 41 + 41 is clearly divisible by 41.

// The incredible formula n2−79n + 1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

// n2 + an + b, where | a |< 1000 and | b |≤1000

// where | n | is the modulus / absolute value of n
// e.g. | 11|=11 and |−4 |= 4
// Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.

function isPrime(num) {
  if (num <= 1) {
    return false;
  } if (num <= 3) {
    return true;
  } if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  const n = Math.floor(Math.sqrt(num));

  while (i <= n) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

function findPrimes(a, b) {
  let n = 0;
  while (isPrime((n ** 2) + (a * n) + b)) {
    n += 1;
  }

  return n;
}

function quadraticPrimes(num = 1000) {
  let max = 0;
  let product = 0;

  for (let i = (num * -1) - 1; i < num; i += 1) {
    for (let j = (num * -1) - 1; j < num; j += 1) {
      const temp = findPrimes(i, j);
      if (temp > max) {
        max = temp;
        product = i * j;
      }
    }
  }

  return product;
}

console.log(quadraticPrimes());
