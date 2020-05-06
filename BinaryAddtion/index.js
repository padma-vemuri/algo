/**
 *
 *  Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:

    Input: a = "11", b = "1"
    Output: "100"
    Example 2:

    Input: a = "1010", b = "1011"
    Output: "10101"
 */

// fancy JS '0B' or '0b' when add before a binary will convert to a binary
const binaryAdd = (a, b) => {
  const padBinary = '0B';
  return (Number(padBinary + a) + Number(padBinary + b)).toString(2);
};

const binaryAdd = (a, b) => {
  const padBinary = '0B';
  return (BigInt(padBinary + a) + BigInt(padBinary + b)).toString(2);
};

// slow brute force addition..
const binaryAdd = (a, b) => {
  a.length > b.length
    ? (b = '0'.repeat(a.length - b.length) + b)
    : (a = '0'.repeat(b.length - a.length) + a);
  let len = a.length;
  let sum = '';
  let carry = 0;
  while (len--) {
    if (a.charAt(len) == 0 && b.charAt(len) == 0 && carry == 0) {
      sum = 0 + sum;
      carry = 0;
    } else if (a.charAt(len) == 0 && b.charAt(len) == 0 && carry == 1) {
      sum = 1 + sum;
      carry = 0;
    } else if (a.charAt(len) == 0 && b.charAt(len) == 1 && carry == 0) {
      sum = 1 + sum;
      carry = 0;
    } else if (a.charAt(len) == 0 && b.charAt(len) == 1 && carry == 1) {
      sum = 0 + sum;
      carry = 1;
    } else if (a.charAt(len) == 1 && b.charAt(len) == 0 && carry == 0) {
      sum = 1 + sum;
      carry = 0;
    } else if (a.charAt(len) == 1 && b.charAt(len) == 0 && carry == 1) {
      sum = 0 + sum;
      carry = 1;
    } else if (a.charAt(len) == 1 && b.charAt(len) == 1 && carry == 0) {
      sum = 0 + sum;
      carry = 1;
    } else if (a.charAt(len) == 1 && b.charAt(len) == 1 && carry == 1) {
      sum = 1 + sum;
      carry = 1;
    }
  }
  return carry === 1 ? carry + sum : sum;
};
