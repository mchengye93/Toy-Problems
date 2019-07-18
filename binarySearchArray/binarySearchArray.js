/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

    var subArr = (low, high) => {
        if(low === high) {
            return null;
        }
        //start at middle
        var mid = Math.floor(((high-low)/2)) + low;

        if(array[mid] === target) {
            return mid;
        }
        //if less than current check mid left
        else if(array[mid] > target) {
            return subArr(low,mid);
        } else {
            return subArr(mid,high);
        }
    }
    return subArr(0,array.length);

};

