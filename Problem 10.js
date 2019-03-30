// Summation of primes

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function summationOfPrimes(num = 2000000) {
  const arr = [];
  let sum = 0;
  const upperLimit = Math.sqrt(num);

  for (let i = 0; i < num; i += 1) {
    arr.push(true);
  }

  for (let i = 2; i < upperLimit; i += 1) {
    if (arr[i]) {
      for (let j = i * i; j < num; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = 2; i < num; i += 1) {
    if (arr[i]) {
      sum += i;
    }
  }

  return sum;
}

console.log(summationOfPrimes());

// Revised using a seive

// function summationOfPrimesRevised(num = 2000000) {
//   const seiveBound = (num - 1) / 2;
//   const arr = [];
//   let sum = 0;
//   const upperLimit = Math.sqrt(num);

//   for (let i = 0; i < seiveBound; i += 1) {
//     arr.push(true);
//   }

//   for (let i = 2; i < upperLimit; i += 1) {
//     if (arr[i]) {
//       for (let j = i * i; j < num; j += i) {
//         arr[j] = false;
//       }
//     }
//   }

//   for (let i = 2; i < num; i += 1) {
//     if (arr[i]) {
//       sum += i;
//     }
//   }

//   return sum;
// }
