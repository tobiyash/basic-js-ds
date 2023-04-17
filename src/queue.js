const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {

  getUnderlyingList() {
    return this.root;

  }

  enqueue(value) {

    this.root = addWithin(this.root, value);

    function addWithin(list, value) {

      if (!list) {
        return new ListNode(value);
      } else {
        list.next = addWithin(list.next, value);
      }

      return list;
    }

  }

  dequeue() {
    let aaaa = this.root.value;
    this.root = this.root.next;
    return aaaa;
  }
}

module.exports = {
  Queue
};
