module.exports = {
  isPrime: function isPrime(num) {
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
  },

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
  },
};
