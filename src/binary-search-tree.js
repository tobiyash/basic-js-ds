const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

}



class BinarySearchTree {
  constructor() {
    this.roott = null
  }

  root() {
    if(!this.roott) {
      return null
    }
    return this.roott
  }

  add(data) {
    this.roott = addWithin(this.roott, data);
    function addWithin(node, value) {
      if(!node) {
        return new Node(value)
      }

      if(node === value) {
        return node
      }

      if(value < node.data) {
        node.left = addWithin(node.left, value)
      } else {
        node.right = addWithin(node.right, value)
      }
      return node
    }

  }

  has(data) {
    return searchWithin(this.roott, data);

    function searchWithin(node, value) {
      if(!node) {
        return false
      }

      if(node.data === value) {
        return true
      }

      return value < node.data ? searchWithin(node.left, value) : searchWithin(node.right, value)
    }


  }

  find(data) {
    
    
    if (!this.has(data)) {
      return  null
    }
    else {
      return searchWithin(this.roott, data)
      function searchWithin(node, value) {
        if(node.data === value) {
          return node
        } else {
          return value < node.data ? searchWithin(node.left, value) : searchWithin(node.right, value)
        }
      }
    }


  }

  remove(data) {
    this.roott = removeNode(this.roott, data)

    function removeNode(node, value) {
      if(!node) {
        return null
      }

      if(value < node.data) {
        node.left = removeNode(node.left, value)
        return node
      } else if (node.data < value) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        }

        if(!node.left) {
          node = node.right
          return node
        }

        if(!node.right) {
          node = node.left
          return node
        }

        let rightMin = node.right
        while(rightMin.left) {
          rightMin = rightMin.left
        }

        node.data = rightMin.data
        node.right = removeNode(node.right, rightMin.data)
        return node
      }
    }


  }

  min() {
    if(!this.roott) {
      return null
    }

    let node = this.roott
    while(node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if(!this.roott) {
      return null
    }

    let node = this.roott
    while(node.right) {
      node = node.right
    }
    return node.data
    }
}

module.exports = {
  BinarySearchTree
};
