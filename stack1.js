//Creates a Stack: 
var Stack = function(){
 this.count = 0; 
 this.storage = {};

 //Adds a value to the end of the stack: 
  this.push = function(value){
     this.storage[this.count] = value;
     this.count++; 
  }

  //Removes and return the value at the end of stack : 

  this.pop = function(){
      if(this.count == 0){
          return undefined;
      }

      this.count--; 
      var result = this.storage[this.count]; 
      delete this.storage[this.count]; 
      return result;
  }

   //returns the Count of the stack: 
  this.size = function(){
      return this.count; 
  }

  //Returns the value at the end of the stack: 
  this.peek = function(){
     return this.storage[this.count - 1];
  }

}

var myStack = new Stack(); 
myStack.push("Mark");
myStack.push("Bill Gates");
console.log(myStack.peek());
