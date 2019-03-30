// Longest Collatz sequence

// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.'

const map = new Map();

function collatzChain(n) {
  if (n === 1) {
    return 1;
  }

  if (map.has(n)) {
    return map.get(n);
  }

  if (n % 2 === 0) {
    map.set(n, 1 + collatzChain(n / 2));
  } else {
    map.set(n, 2 + collatzChain((3 * n + 1) / 2));
  }

  return map.get(n);
}

function longestCollatzSequence(num = 1000000) {
  let length = 0;
  let answer = 0;

  for (let i = num / 2; i < num; i += 1) {
    const x = collatzChain(i);
    if (x > length) {
      length = x;
      answer = i;
    }
  }

  return answer;
}

console.log(longestCollatzSequence());
