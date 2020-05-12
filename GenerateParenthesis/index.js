/**
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 * [
 * "((()))",
 * "(()())",
 * "(())()",
 * "()(())",
 * "()()()"
 * ]
 **/

/**
 * @param {number} n
 * @return {string[]}
 */
var generate = function (left, right, str, arr) {
  if (!left && !right && str.length) return arr.push(str);
  if (left) generate(left - 1, right, str + '(', arr);
  if (right > left) generate(left, right - 1, str + ')', arr);
};

var generateParenthesis = function (n, arr = []) {
  generate(n, n, '', arr);
  return arr;
};
