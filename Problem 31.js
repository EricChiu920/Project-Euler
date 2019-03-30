// Coin sums

// Problem 31
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1(100p) and £2(200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins ?

// Classic recursion problem.
// Count the ways you can make change with 1 pence, 2 pence, and so on.

const coinsArr = [1, 2, 5, 10, 20, 50, 100, 200];

function coinSums(coins, num, amount = 200) {
  // Base cases
  if (amount === 0) { // There's one way to make change for 0.
    return 1;
  }
  if (amount < 0) { // Return 0 when amount is negative.
    return 0;
  }
  if (num < 0) { // Return 0 when out of coin types.
    return 0;
  }

  return coinSums(coins, num, amount - coins[num]) // The number of ways to make change with the current coin.
    + coinSums(coins, num - 1, amount);            // The number of ways to make change with a smaller coin.
}

console.log(coinSums(coinsArr, coinsArr.length - 1));
