const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  } 

  root() {
    return this._root;
  }

  add(data) {
    this._root = addNewElem(this._root, data);

    function addNewElem(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        node.right = addNewElem(node.right, data);
      } else {
        node.left = addNewElem(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return searchElem(this._root, data);

    function searchElem(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data > node.data) {
        return searchElem(node.right, data);
      } else {
        return searchElem(node.left, data);
      }
    }
  }

  find(data) {
    return findElem(this._root, data);

    function findElem(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findElem(node.right, data);
      } else {
        return findElem(node.left, data);
      }
    }
  }

  remove(data) {
    this._root = removeElem(this._root, data);

    function removeElem(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeElem(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeElem(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeElem(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this._root) {
      return null;
    }

    let minNode = this._root;
    while(minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (!this._root) {
      return null;
    }

    let maxNode = this._root;
    while(maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
