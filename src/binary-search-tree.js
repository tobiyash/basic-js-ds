const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
        this._root = newNode;
    } else {
        this.insertNode(this._root, newNode);
    }
  }
  
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
  }

  has(data, node = this._root) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.has(data, node.left);
    } else if (data > node.data) {
      return this.has(data, node.right);
    } else {
      return true;
    }
  }

  find(data, node = this._root) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        return this.find(data, node.left);
    } else if (data > node.data) {
        return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data, node = this._root) {
    if (node === null) {
      return null;
  // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
      node.left = this.remove(data, node.left);
      return node;
  // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
      return node;
  // если данные такие как данные корня, удаляем узел
    } else {
      // удаляем узел без потомков (листовой узел (leaf) или крайний)
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
      // удаляем узел с одним потомком
        if (node.left === null) {
          node = node.right;
          return node;
        } else if(node.right === null) {
          node = node.left;
          return node;
        }
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
        // let newNode = node.right != null ? this.min(node.right) : this.max(node.left);
        let newNode = this.min(node.right);
        console.log(newNode);
        node.data = newNode;
        node.right = this.remove(newNode, node.right);
        return node;
  }
}

  min(node = this._root) {
    if (node.left === null)
      return node.data;
    else
      return this.min(node.left);
  }

  max(node = this._root) {
    if (node.right === null)
      return node.data;
    else
      return this.max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};
