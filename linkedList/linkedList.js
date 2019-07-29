/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(
) {
};

LinkedList.prototype.removeHead = function() {
  var node = this.head;

  if (node.next !== null) {
    this.head = node.next;
  } else {
    this.head = null;
    this.tail = null;
  }
};

LinkedList.prototype.contains = function(target) {
    var node = this.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {
    value: value,
    next: null,
  }
  return node;
};
