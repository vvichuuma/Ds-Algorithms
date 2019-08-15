//This is the code for Binary Search Tree: 



class Node{
    constructor(data,left = null, right = null){
        this.data = data; 
        this.left = left; 
        this.right = right;
  
    }
  }
  
  class Bst{
     
      constructor(root = null){
          this.root = root;
      }
  
      //TO print the root: 
      print(){
          return this.root;
      }
  
      //To add into the node: 
     add(data){
   
       if(this.root === null){
           this.root = new Node(data);
           return;
       }else if(this.root !== null){
           var node = this.print(); 
  
           //Function begin: 
           const searchNode = function(node){
  
              if(data < node.data){
  
                  if(node.left === null){
                      node.left = new Node(data); 
                      return;
                  }else if(node.left !== null){
                     return searchNode(node.left);
                  }
                  
              }else if(data > node.data){
  
                  if(node.right === null){
                      node.right = new Node(data);   
                      return; 
                  }else if(node.right !== null){
                     return searchNode(node.right);
                  }
                  
              }else{
                  return null;
              } 
  
          
          //Function End: 
  
         }
  
         return searchNode(node);
   
       }
       
     }
  
     //To find the minimum: 
  
     min(){
        var node = this.print(); 
         
        while(node.left !== null){
            node = node.left;
        }
  
        console.log(node);
  
     }
  
     //To find the maximum: 
     max(){
         var node = this.print(); 
  
         while(node.right !== null){
             node = node.right; 
         }
  
         console.log(node);
     }
  
    
       //To remove data from the BST: 
     remove(data){
        
         //Gets the current node: 
         const roots = this.print(); 
          
         this.removeData = function(node, data){
            
            if(data === node.data ){
  
              if(node.left === null && node.right === null){
                  return null;
              }else if(node.right === null ){
                  node = node.left; 
                  return node;
              }else if(node .left === null){
                  node = node.right; 
                  return node;
              }else if(node.left !== null && node.right !== null ){
  
                 var tempNode = node.right; 
  
                 while(tempNode.left !== null){
                     tempNode = tempNode.left;
                 }
  
                 node.data = tempNode.data; 
                 node.right = this.removeData( node.right,tempNode.data);
                 return node;
  
              }
                 
            }else if(data < node.data){
              
              node.left =  this.removeData(node.left,data);
              return node;
             
            }else if(data > node.data){
  
              node.right =  this.removeData(node.right,data);
              return node;
  
            }
  
         }
  
         //First step is calling the function with the current root node.
        return this.removeData(roots, data);
     }
  
  }
    
  const b1 = new Bst();
  b1.add(30);
  b1.add(20);
  b1.add(40); 
  b1.add(15);
  b1.add(28); 
  b1.add(39); 
  b1.add(45);
  console.log(b1.print());
  console.log('---'); 
  console.log(b1.remove(30));
  