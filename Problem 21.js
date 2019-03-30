// Amicable numbers

// Problem 21
// Let d(n) be defined as the sum of proper divisors of n(numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

function getDivisors(num) {
  if (num === 1) {
    return [1];
  }

  const arr = [1]; // get all proper divisors. Include 1 initially.
  const max = Math.sqrt(num); // Factors comes in pairs so you only need to check up to the sqrt.
  if (Number.isInteger(max)) { // Account for if it is a perfect square.
    arr.push(max);
  }

  for (let i = 2; i < max; i += 1) {
    if (num % i === 0) {
      arr.push(i);
      arr.push(num / i);
    }
  }

  return arr;
}

function amicableNumber(num = 10000) {
  let sum = 0;
  let b = 0;

  for (let a = 1; a < num; a += 1) {
    b = getDivisors(a).reduce((prev, curr) => prev + curr, 0); // Get divisors then add them together.
    if (b > a && a === getDivisors(b).reduce((prev, curr) => prev + curr, 0)) {
      sum = sum + a + b; // Amicable numbers also comes in pairs so we only need to check when b is larger than a, then add both b and a at the same time.
    }
  }

  return sum;
}

console.log(amicableNumber());
