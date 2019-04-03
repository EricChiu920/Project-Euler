// Digit cancelling fractions

// Problem 33
// The fraction 49 / 98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49 / 98 = 4 / 8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30 / 50 = 3 / 5, to be trivial examples.

// There are exactly four non - trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

// After canceling we end up with two unique digits.
// Since the value will be less than one the smaller digit is always on top.
// If the original double digit numbers contains 0 it is a trivial example.

const Decimal = require('decimal.js');

// Original numerator, Original denominator, the two indexes; i and j to compare.
function isCancelledEqualOriginal(n, d, i, j) {
  if (String(n)[i] === String(d)[j]) {
    const cancelledN = Number(String(n)[1 - i]); // The numerator and denominator after the matching numbers are cancelled
    const cancelledD = Number(String(d)[1 - j]);

    const cancelledFraction = new Decimal(cancelledN).dividedBy(cancelledD);
    const originalFraction = new Decimal(n).dividedBy(d);
    if (Number(cancelledFraction) === Number(originalFraction)) {
      return true;
    }
  }

  return false;
}

function digitCancellingFractions() {
  const result = [];

  for (let d = 12; d < 100; d += 1) {
    for (let n = 11; n < d; n += 1) {
      if (isCancelledEqualOriginal(n, d, 0, 0)) {
        result.push([n, d]);
      } else if (isCancelledEqualOriginal(n, d, 0, 1)) {
        result.push([n, d]);
      } else if (isCancelledEqualOriginal(n, d, 1, 0)) {
        result.push([n, d]);
      } else if (isCancelledEqualOriginal(n, d, 0, 1)) {
        result.push([n, d]);
      }
    }
  }

  let resultProduct = new Decimal(1);
  for (let i = 0; i < result.length; i += 1) {
    resultProduct = resultProduct.times(result[i][0]).dividedBy(result[i][1]);
  }

  return Number(resultProduct.toFraction()[1]);
}

console.log(digitCancellingFractions());
