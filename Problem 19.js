// Counting Sundays

// Problem 19
// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
//   April, June and November.
// All the rest have thirty - one,
//   Saving February alone,
//     Which has twenty - eight, rain or shine.
// And on leap years, twenty - nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century(1 Jan 1901 to 31 Dec 2000) ?

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function countSundays() {
  const years = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 7; // Day of the first Sunday of the year.
  let sundays = 0;

  for (let j = 0; j < years.length; j += 1) { // Skip past the year 1900.
    while (years[j] > day) {
      day += 7;
    }
    day %= years[j];
  }

  for (let i = 1901; i <= 2000; i += 1) {
    if (isLeapYear(i)) {
      years[1] += 1;
    }

    for (let j = 0; j < years.length; j += 1) {
      if (day === 1) { // Check month first since we're already in January.
        sundays += 1;
      }
      while (years[j] > day) {
        day += 7;
      }
      day %= years[j];
    }

    if (isLeapYear(i)) {
      years[1] -= 1;
    }
  }

  return sundays;
}

console.log(countSundays());
