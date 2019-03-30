// Reciprocal cycles

// Problem 26
// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2  =  0.5
// 1/3  =  0.(3)
// 1/4  =  0.25
// 1/5  =  0.2
// 1/6  =  0.1(6)
// 1/7  =  0.(142857)
// 1/8  =  0.125
// 1/9  =  0.(1)
// 1/10 =  0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

// Algorithm from https://en.wikipedia.org/wiki/Repeating_decimal#Decimal_expansion_and_recurrence_sequence

function findCycle(n) {
  const lastPosition = { n: true };
  let divided = 1;
  let count = 0;
  let remainder = 1;

  while (true) {
    remainder = divided % n;

    if (remainder === 0) {
      return 0;
    }

    if (lastPosition[remainder]) { // Continue until a remainder is repeated.
      return count; // There is a bug with getting the correct length of the cycle if the cycle does not start on the first digit.
    }

    lastPosition[remainder] = true;

    count += 1;
    divided = remainder * 10;
  }
}

function reciprocalCycles(num = 1000) {
  let longestLength = 0;
  let longestDivisor = 0;

  for (let i = 1; i < num; i += 1) {
    const length = findCycle(i);
    if (length > longestLength) {
      longestLength = length;
      longestDivisor = i;
    }
  }

  return longestDivisor;
}

console.log(reciprocalCycles());
