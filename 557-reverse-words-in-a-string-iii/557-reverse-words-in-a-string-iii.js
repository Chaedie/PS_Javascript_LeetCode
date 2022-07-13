/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = (s) => s.split(' ').map((x) => x.split('').reverse().join('')).join(' ');