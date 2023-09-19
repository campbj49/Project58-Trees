/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //handle empty trees
    if(!this.root) return 0;
    
    //define recursive helper function
    function _sumValues(node){
      //check to see if the given node is a leaf
      if(node.children.length === 0) return node.val;

      //otherwise iterate through all the children to get their respective totals
      let total = node.val;
      for(let child of node.children)
        total += _sumValues(child);
      return total;
    }

    return _sumValues(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    //same as the sum function, just incrementing instead of summing
    //handle empty trees
    if(!this.root) return 0;
    
    //define recursive helper function
    function _countEvens(node){
      //check to see if the given node is a leaf
      if(node.children.length === 0) return node.val%2 ===0 ?1:0;

      //otherwise iterate through all the children to get their respective totals
      let total = node.val%2 ===0 ?1:0;
      for(let child of node.children)
        total += _countEvens(child);
      return total;
    }

    return _countEvens(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //same as the countEven function, just incrementing on lowerBound rather than evens
    //handle empty trees
    if(!this.root) return 0;
    
    //define recursive helper function
    function _numGreater(node){
      //check to see if the given node is a leaf
      if(node.children.length === 0) return node.val>lowerBound ?1:0;

      //otherwise iterate through all the children to get their respective totals
      let total = node.val>lowerBound ?1:0;
      for(let child of node.children)
        total += _numGreater(child);
      return total;
    }

    return _numGreater(this.root);

  }
}

module.exports = { Tree, TreeNode };
