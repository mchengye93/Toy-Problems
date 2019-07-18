/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  var objCount = {};

  for (var i= 0; i < arr.length; i++) {
    if(objCount[arr[i]] === undefined) {
      objCount[arr[i]] = 1;
    } else {
      objCount[arr[i]] = objCount[arr[i]] + 1;
    }
  }

  for (var key in objCount) {
    if (objCount[key] % 2 === 0) {
      return key;
    }
  }
};
