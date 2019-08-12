
function Node(data = null, next = null){
   this.data = data; 
   this.next = next; 
}

function Linkedlist(head = null, size = 0){
   this.head = head; 
   this.size = size; 

   //returns the head: 
   this.current = function(){
       return this.head;
   }

   //adding an element in the Node: 
   this.addition = function(data){
      this.head = new Node(data,this.head);
   }

   //finding an element at an index: 
   this.indexOf = function(index){
      var current = this.current(); 
      var count = 0; 

      while(count !== index){
          var ele = current; 
          count += 1; 
          ele = current.next; 
      }

      return (ele);

   }

   //remove at a particular index: 
   this.removeAt = function(index){
       var current = this.current(); 
       var count = 0; 
        if(index == count){
            this.head = current.next;
        }else{

            while(count !== index){
                var previous = current;  
                count++;
                current = current.next;
            }

           previous.next = current.next;
        }

        console.log(this.current());
   }


   //Add at particular index: 
   this.addAt = function(index, element){

     //make sure you check wether the index is greater than the length of the linkedlist:
     // If it is greater than the LinkedList size then return false.

       var current = this.current();
       var count = 0; 
       var node = new Node(element);
       var previous;

       if(index == 0){
          node.next = current; 
          this.head = node;
       }else{

           while(count !== index){
              previous = current;   
              count++; 
              current = current.next; 
           }

           previous.next = node; 
           node.next = current;
       }

       console.log(this.current());

   }
   
}

const ll = new Linkedlist(); 
ll.addition(100); 
ll.addition(200);
ll.addition(300);
console.log(ll.indexOf(1));
console.log("----");
ll.addAt(3,400);
