// Digit factorials

// Problem 34
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

//   Note: as 1! = 1 and 2! = 2 are not sums they are not included.

function getFactorialSum(num, factorials) {
  const arr = String(num).split('').map(val => factorials[Number(val)]);

  return arr.reduce((prev, curr) => prev + curr, 0);
}

function digitFactorials() {
  const factorials = [1];
  let sum = 0;

  for (let i = 1; i < 10; i += 1) { // Get the result of factorials for digits 0 through 9.
    factorials.push(factorials[i - 1] * i);
  }

  for (let i = 10; i < 100000; i += 1) {
    if (getFactorialSum(i, factorials) === i) {
      sum += i;
    }
  }

  return sum;
}

console.log(digitFactorials());
