

class Node{
    constructor(data = null, left = null, right = null){
        this.data = data; 
        this.left = left; 
        this.right = right;
    }
  
  }
  
  class BST{
  
     constructor(root = null){
         this.root = new Node(root);
     }
  
     //prints out the root: 
     print(){
         return this.root;
     }
  
     //adds data : 
     add(data){
  
         //return the node; 
         var currentNode = this.print(); 
  
         //if the current Node is null: 
         if(currentNode.data === null){
            
            this.root = new Node(data);
            return;
  
         }else{
               
             const searchTerm = function(currentNode){
  
                 if(data < currentNode.data){
                       
                      if(currentNode.left === null){
  
                         currentNode.left = new Node(data);
                         return;
  
                      }else if(currentNode.left !== null){
  
                          return searchTerm(currentNode.left);
                      }
  
                 }else if(data > currentNode.data){
                    
                     if(currentNode.right === null){
  
                         currentNode.right = new Node(data);
                         return;
  
                     }else if(currentNode.right !== null){
  
                         return searchTerm(currentNode.right);
  
                     }
  
                 }else{
                     return null;
                 }
  
             }
  
  
            return searchTerm(currentNode);
  
         }
  
     }
  
     //Find the min height: 
  
     findMinHeight(node = this.root){
       
        if(node === null){
            return -1; 
        }
  
        let left = this.findMinHeight(node.left); 
        let right = this.findMinHeight(node.right); 
        
        if(left < right){
           return left + 1;
        }else{
           return right + 1;
        }
     }
  
     //FInd the Max Height: 
  
     findMaxHeight(node = this.root){
  
      if(node === null){
          return -1; 
      }
  
      let left = this.findMaxHeight(node.left); 
      let right = this.findMaxHeight(node.right); 
      
      if(left > right){
         return left + 1;
      }else{
         return right + 1;
      }
  
     }
  
       //FInd the balance : 
       isBalanced(){
          return (this.findMinHeight() >= this.findMaxHeight() - 1);
      }
  
      //InOrder: 
      //Traverse the tree: 
      //https://www.youtube.com/watch?v=5dySuyZf9Qg
      //inorder - you begin with the left most node and add all the numbers in order: 
      inOrder(){
          if(this.root === null){
              return null; 
          }else{
             
              var result = new Array(); 
              function traverseInOrder(node){
                  //If there is a left node the recurr the function again until there is no left node and then push the data in the array. 
                  //Once there is no left node and then return back to the Top node. 
  
                  node.left && traverseInOrder(node.left);
                  result.push(node.data); 
                  node.right && traverseInOrder(node.right);
  
              }
  
               traverseInOrder(this.root); 
               return result;
  
          }
      }
      //inOrder end: 
  
  
      //Preorder - the preorder focuses on the root node first and then focuses on the nodes below them. 
      preOrder(){
         if(this.root === null){
             return null;
         }else{
             
             var result = new Array(); 
             function preOrderTraversal(node){
                  result.push(node.data); 
                  node.left && preOrderTraversal(node.left); 
                  node.right && preOrderTraversal(node.right);
             }
             preOrderTraversal(this.root); 
             return result;
         }
  
      };
  
      //postOrder - the postOrder focuses on the leaf nodes first , it fouses on the leaf nodes on one branch and then goes on to the next branch.
  
      postOrder(){
         if(this.root === null){
             return null
         }else{
  
            var result = new Array(); 
            function postOrder(node){
              node.left && postOrder(node.left); 
              node.right && postOrder(node.right);
              result.push(node.data); 
            }
  
            postOrder(this.root);
            return result;
  
         }
  
      }; 
  
      //:Level order first is gonna focus on breath node: 
  
      levelOrder(){
         let result = []; 
         let Q = []; 
         if(this.root !== null){
             //pushes the entire root into the array: 
            Q.push(this.root); 
             while(Q.length > 0){
  
                  let node = Q.shift(); 
  
                  result.push(node.data); 
  
                  if(node.left !== null){
                      Q.push(node.left);
                  };
  
                  if(node.right !== null){
                      Q.push(node.right); 
                  };
  
             }; 
  
             return result;
  
         }else{
             return null;
         }
  
      }
  
  
  }
  
  const n = new BST(); 
  n.add(9);
  n.add(4);
  n.add(17);
  n.add(3);
  n.add(6); 
  n.add(22); 
  n.add(5);
  n.add(7); 
  n.add(20); 
  console.log(n.findMinHeight());
  console.log(n.findMaxHeight());
  console.log(n.isBalanced());
  console.log(n.print());
  console.log(n.inOrder());
  console.log(n.preOrder());
  console.log(n.postOrder());
  console.log(n.levelOrder());
  