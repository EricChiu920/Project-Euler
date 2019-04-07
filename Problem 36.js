// Double-base palindromes

// Problem 36
// The decimal number, 585 = 10010010012(binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

//   (Please note that the palindromic number, in either base, may not include leading zeros.)

function checkPalindrome(n) {
  return String(n) === String(n).split('').reverse().join('');
}

function doubleBasePalindromes(num = 1000000) {
  let sum = 0;

  for (let i = 1; i < num; i += 2) {
    const base2 = i.toString(2);
    if (checkPalindrome(i) && checkPalindrome(base2)) {
      sum += i;
    }
  }

  return sum;
}

console.log(doubleBasePalindromes());
