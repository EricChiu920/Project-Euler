// Maximum path sum I

// Problem 18
// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

// 3
// 7 4
// 2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:

const pathArr = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];

const pathArr2 = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
];

// 1. Start from the second to last row.
// 2. For each number in the row, check the two numbers below it and add the larger number below it to the current number.
// 3. Repeat from step two, going up the rows until the top row is reached.
// 4. Top row should now contain the maximum path;

/* example
3
7 4
2 4 6 <-- Start here. For 2, add 8 since it's the larger number between 8 and 5. ...cont
8 5 9 3   //For 4, add 9 since it's the larger number between 5 and 9. For 6, add 9 since it's the larger number between 9 and 3.

Pyramid now looks like this.
3
7 4
10 13 15
8 5 9 3

Repeat for the row above and you get
3
20 19
10 13 15
8 5 9 3

Once more and you get the answer as the top row.
23
20 19
10 13 15
8 5 9 3
*/

function maximumPathSum(arr) {
  const copyArr = [...arr];

  for (let i = arr.length - 2; i >= 0; i -= 1) {
    let max = arr[i][0] + arr[i + 1][0];

    for (let j = 0; j < arr[i].length; j += 1) {
      copyArr[i][j] = Math.max(arr[i][j] + arr[i + 1][j], arr[i][j] + arr[i + 1][j + 1]);
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }

  return copyArr[0][0];
}

console.log(maximumPathSum(pathArr));
