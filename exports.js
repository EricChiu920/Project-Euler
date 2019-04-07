module.exports = {
  // Receives a number to check if it is a prime
  isPrime: function isPrime(num) {
    if (Number.isNaN(num) || !Number.isFinite(num) || num % 1 || num < 2) {
      return false;
    }
    if (num % 2 === 0) {
      return num === 2;
    }
    if (num % 3 === 0) {
      return num === 3;
    }

    const n = Math.sqrt(num);
    for (let i = 5; i <= n; i += 6) {
      if (num % i === 0) {
        return false;
      }

      if (num % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  }, // Returns true if the number is a prime, false otherwise.

  // Receives a number which is the amount upper range of the numbers to check if it is a prime
  primeSeive: function primeSeive(num) {
    const primes = [];
    const upperLimit = Math.sqrt(num);

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

    return primes;
  }, // Returns a array which contains true for the index of prime numbers
};
