// Number spiral diagonals

// Problem 28
// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way ?

// Observations.
// 1. The distance between the numbers is the same.
// 2. The distance is the length of a row/column of the previous box.
// 3. The length of a row/column goes up by two every time.
// 4. The size of a box is n * n;

function spiralDiagonals(num = 1001) {
  let sum = 1;
  let n = 1;

  for (let i = 3; i <= num; i += 2) {
    while (n < i * i) {
      n = n + i - 1; // Find the next diagonal number.
      sum += n;
    }
  }

  return sum;
}

console.log(spiralDiagonals());
