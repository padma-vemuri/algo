/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = (strs) => {
  let hash = new Map();
  strs.forEach((str) => {
    const ch = str.split('').sort().join('');
    if (!hash.has(ch)) {
      hash.set(ch, [str]);
    } else {
      const values = hash.get(ch);
      values.push(str);
      hash.set(ch, values);
    }
  });
  return [...hash.values()];
};
