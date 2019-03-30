// 10001st prime

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number ?

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

function findPrime(num = 10001) {
  let count = 1;
  let i = 1;

  while (count < num) {
    i += 2;
    if (isPrime(i)) {
      count += 1;
    }
  }

  return i;
}

console.log(findPrime());

/* Notes from overview

1 is not a prime. (Return false if num <= 1)
All primes except 2 are odd. (Return false if num % 2 === 0)
All primes greater than 3 can be written in the form 6k+/-1. (Allows us to increment i by 6)
Any number n can have only one primefactor greater than n . (Check only up to the square root of num)
The consequence for primality testing of a number n is: if we cannot find a number f less than
or equal n that divides n then n is prime: the only primefactor of n is n itself

*/
