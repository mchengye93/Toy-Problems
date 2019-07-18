/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var uniqueObj = {};
  for (var i= 0; i < string.length; i++) {
    if (uniqueObj[string[i]] === undefined) {
      uniqueObj[string[i]] = 1;
    }
    else {
      uniqueObj[string[i]] = 1 + uniqueObj[string[i]] ;
    }
  }
  for (var key in uniqueObj) {
    if (uniqueObj[key]=== 1) {
      return key;
    }
  }
};
