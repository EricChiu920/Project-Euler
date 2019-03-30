// Lattice paths

// Problem 15
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


// How many such routes are there through a 20×20 grid ?

// Observations
// 1. Instead if thinking if as traveling a grid instead think of it as a series of Right and Down movements.
// 2. There has to be a equal number of Rights and Downs.
// 3. There is n + n (or 2n) moves total, so n Downs and n rights.

function nChooseK(n, k) {
  if (k === 0) {
    return 1;
  }
  return (n * nChooseK(n - 1, k - 1)) / k;
}

// Answer can be found by calculating 2n (total number of moves) choose n
function latticePaths(num = 20) {
  return nChooseK(2 * num, num);
}

console.log(latticePaths());
