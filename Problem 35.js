// Circular primes

// Problem 35
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million ?

function checkCircularPrime(prime, primes) { // Assume the passed in number is a prime
  let num = String(prime);

  for (let i = 0; i < num.length - 1; i += 1) {
    num = num.substring(1) + num.substring(0, 1); // Rotate the string first since we assume the original number is already a prime.

    if (!primes[num]) { // If the rotated number is not a prime return false
      return false;
    }
  }

  return true;
}

function circularPrimes(num = 1000000) {
  const primes = [];
  const circularPrimeArr = [];
  const upperLimit = Math.sqrt(num);

  // Find all primes under "num" using a seive
  for (let i = 0; i < num; i += 1) {
    primes.push(true);
  }

  for (let i = 2; i < upperLimit; i += 1) {
    if (primes[i]) {
      for (let j = i * i; j < num; j += i) {
        primes[j] = false;
      }
    }
  }

  // Find all circular primes
  for (let i = 2; i < num; i += 1) {
    if (primes[i] && checkCircularPrime(i, primes)) {
      circularPrimeArr.push(i);
    }
  }

  return circularPrimeArr.length;
}

console.log(circularPrimes());
