var Stack = function(){
   this.count = 0; 
   this.storage = {};

   //adds to Stack:
   this.addFunc = (value) => {
     this.storage[this.count] = value; 
     this.count++; 
   }

   //Returns the Stack: 
   this.stackCode = function(){
       console.log(this.storage);
   }

   //Returns the last element of the stack: 
   this.lastElement = function(){
       return this.storage[this.count-1];
   }

   //Deleting an element from stack: 
   //Since stack is a form of book array - only the last element will be deleted first: 
   this.delElement = function(){
       this.count--;
       var res = this.storage[this.count]; 
       delete this.storage[this.count]; 
       console.log("The element deleted was " + res);

   }


}

var s1 = new Stack(); 
s1.addFunc("Mark Zuckerberg");
s1.addFunc("Bill Gates"); 
s1.addFunc("Micheal Seaman");
s1.delElement();

console.log("The last element is " + s1.lastElement());

