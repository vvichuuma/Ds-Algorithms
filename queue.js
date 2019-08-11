

//A Queue is first in first out. It is similar to a people who are waiting in line in a queue; 
//The first person who is waiting in the line is the first person to get out.
//The end of the line is the end of the array. 
//The beginning of the line is the beginning of the array , the end of the line is the end of the array. 

function Queue(){
    //This one holds the queue: 
    var collection = []; 
   
    //Prints out the queue:
     this.print = function(){
        return (collection); 
     }

     //this one pushes into the queue: 
     this.enqueue = function(value){
        collection.push(value);
     }

     //This one deletes the last element: 
     this.dequeue = function(){
       return collection.shift();
     }

     //THis one prints out the first element: 
     this.front = function(){
         return collection[0]; 
     }

     //returns the length: 
     this.size = function(){
         return collection.length;
     }

     //returns an empty array: 
     this.isEmpty = function(){
         return (collection.length === 0);
     }

}

var q = new Queue; 
q.enqueue("a");
q.enqueue("b");
q.enqueue('c'); 
console.log(q.print());
q.dequeue(); 
q.front();
console.log(q.print());

