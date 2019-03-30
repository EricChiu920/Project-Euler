// Lexicographic permutations

// Problem 24
// A permutation is an ordered arrangement of objects.For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order.The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9 ?

// We are find ways to order numbers.
// After the first number is chosen there are 9! ways to order the rest of the numbers.
// We get as close as we can to 1,000,000 to find the first digit.
// Repeat with 8! for the second and etc

function factorial(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function lexicographicPermutations(num = 1000000) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Each digit is only used once. Use a array to keep track of what digits are remaining.
  const arr = []; // Store the order of digits here.
  let copy = num - 1; // Substract 1 since 0123456789 is the 0th number, so we want the 999,999th number.

  for (let i = 9; i >= 0; i -= 1) {
    const f = factorial(i);
    const index = Math.floor(copy / f);
    copy %= f;
    arr.push(digits[index]);
    digits.splice(index, 1);
    if (copy === 0) { // Break if the remainder is 0. Then concat the remaining digits onto arr.
      break;
    }
  }

  return arr.concat(digits).join('');
}

console.log(lexicographicPermutations());
