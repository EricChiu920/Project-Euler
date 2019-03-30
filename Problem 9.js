// Special Pythagorean triplet

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

//   a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
// c = 6
// b = 5
// a = 1

function specialPythagoreanTriplet(num = 1000) {
  let c = num / 2;
  let b = c - 1;
  let a = num - b - c;

  for (; c >= b; c -= 1) {
    for (; b > a + 1; b -= 1) {
      a = num - b - c;
      if ((a ** 2) + (b ** 2) === (c ** 2)) {
        return a * b * c;
      }
    }

    b = c - 1;
    a = num - b - c;
  }

  return 'err';
}

console.log(specialPythagoreanTriplet());
