// Names scores

// Problem 22
// Using names.txt(right click and 'Save Link/Target As...'), a 46K text file containing over five - thousand first names, 
// begin by sorting it into alphabetical order.Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
// So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file ?

const fs = require('fs');

const points = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};

function getScore(names) { // Gets the sum of the scores.
  let sum = 0;

  for (let i = 0; i < names.length; i += 1) {
    const name = String(names[i]).toUpperCase();
    let namePoints = 0; // Get the points value of the name
    for (let j = 0; j < name.length; j += 1) {
      namePoints += points[name[j]];
    }
    namePoints *= (i + 1); // Multiply the points by the position.
    sum += namePoints;
  }
  return sum;
}

function nameScores() { // Reads file then passes the data as a array to getScore
  const filename = 'p022_names.txt';
  let names;
  try {
    names = fs.readFileSync(filename, { encoding: 'utf8' }).replace(/"/g, '').split(',').sort(); // Get each name into a array then sort.  
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Make sure you have a file called \'p022_names.txt\' in the directory');
      process.exit(1);
    } else {
      throw err;
    }
  }

  return getScore(names);
}

console.log(nameScores());
