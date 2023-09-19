/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    //handles empty trees
    if(!this.root) return 0;

    //only way to be sure is to rucurse out to every leaf, then return back to the root
    //helper function to accomplish that goal
    function _minDepth(node){
      //declare useful tracking variables
      let leftLen = false;
      let rightLen = false;

      //first check if the current node is a leaf
      if(!(node.left || node.right)) return 1;
      //recurse on both legs to get the shortest leg
      if(node.left) leftLen = _minDepth(node.left) + 1;
      if(node.right) rightLen = _minDepth(node.right) + 1;

      //pass along the shortest of the two
      return Math.min(leftLen, rightLen);
    }

    return _minDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    //same as minDepth, just returning the max rather than the min during recursion
    if(!this.root) return 0;
    function _maxDepth(node){
      let leftLen = false;
      let rightLen = false;

      if(!(node.left || node.right)) return 1;
      if(node.left) leftLen = _maxDepth(node.left) + 1;
      if(node.right) rightLen = _maxDepth(node.right) + 1;

      return Math.max(leftLen, rightLen);
    }

    return _maxDepth(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    //same as the Sum functions, just returning values rather than incrementations
    //since the "path" counts turning around the root node, it has to track all the sums of left and right
    //what would the return value be? It can't just be the sum of right at left
    //it needs to be "biggest of right and left" *and* "sum of right and left"
    //so nodes further on in the recursion can compare to see if they have access to
    //the paths needed to "win"
    if(!this.root) return 0;
    function _maxSum(node){
      let leftSum = false;
      let rightSum = false;
      let leftMax = false;
      let rightMax = false;

      if(!(node.left || node.right)) return [node.val, node.val];
      if(node.left) {
        let res = _maxSum(node.left);
        [leftSum, leftMax] = [res[0] + node.val, res[1]];
      }
      if(node.right) {
        let res = _maxSum(node.right);
        [rightSum, rightMax] = [res[0] + node.val, res[1]];
      }
      //need to make sure negative values aren't getting turned into 0s from the default vals
      let legMax;
      if(!leftSum) legMax = rightSum;
      else if(!rightSum) legMax = leftSum;
      else legMax = 0;

      return [Math.max(leftSum, rightSum, node.val), 
              Math.max(leftSum+rightSum-node.val, leftMax, rightMax)];
    }

    return Math.max(..._maxSum(this.root));

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    //same as depth functions, just searching all the nodes for values instead of summing them
    if(!this.root) return null;
    function _nextLarger(node){
      let leftRes = null;
      let rightRes = null;

      if(!(node.left || node.right)) return node.val>lowerBound ? node.val:null;
      if(node.left) leftRes = _nextLarger(node.left);
      if(node.right) rightRes = _nextLarger(node.right);
      //find the best results among the two legs and the current node
      let res = []
      if(node.val>lowerBound) res.push(node.val);
      if(leftRes != null) res.push(leftRes);
      if(rightRes != null) res.push(rightRes);
      if(res.length ===0) res = null;
      else res = Math.min(...res);

      return res;
    }

    return _nextLarger(this.root);

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
