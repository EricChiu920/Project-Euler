// Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multiples3or5(num = 1000) {
  let sum = 0;

  // Add up all the numbers from 1 to the target number that are multiples of 3 or 5 until we reach below the target number.
  for (let i = 0; i < num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// revised solution from the overview
function sumDividedBy(num, divisor) {
  const n = Math.floor(num / divisor);

  return n * (n + 1) / 2 * divisor;
}

function multiples3or5Revised(num = 1000) {
  let sum = 0;
  const x = num - 1; // Subtract 1 since we need all numbers below that number

  sum += sumDividedBy(x, 3); // Add all numbers below the target that are multiples of 3
  sum += sumDividedBy(x, 5); // Add all numbers below the target that are multiples of 5
  sum -= sumDividedBy(x, 15); // Subtract all numbers below the target that are multiples of 15 due to double counting

  return sum;
}

console.log(multiples3or5());
// console.log(multiples3or5Revised());
