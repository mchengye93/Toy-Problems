/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  var charCount = {};
  var commonCharObj = {};

  
    for (var i = 0; i < string1.length; i++) {
      if (charCount[string1[i]] === undefined) {
        charCount[string1[i]] = 1;
      }
    }
    for (var i =0; i < string2.length;i++) {
      if (charCount[string2[i]] !==undefined) {
        commonCharObj[string2[i]] = 1;
      }
    }

    var commonUniqueChar = [];

    for (var i = 0; i < string1.length; i++) {
      if (commonCharObj[string1[i]]!== undefined) {
        commonUniqueChar.push(string1[i]);
        delete commonCharObj[string1[i]];
      }
    }
    return commonUniqueChar.join('');
  
  
};
