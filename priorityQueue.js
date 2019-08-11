
function priorityQueue(){
    //The Queue: 
 var collection = []; 

 this.isEmpty = function(){
     if(collection.length === 0){
         return true;
     }else{
         return false;
     }
 }

  this.array = function(){
      return collection.length;
  }

  //Prints the entire Queue: 
 this.printCollection = function(){
     console.log(collection);
 }

 //THis is to add in the Queue: 
 this.enqueue = function(value){
     var added = false;
     
    if(this.isEmpty()){
        collection.push(value);
        added = true;
    }else if(!this.isEmpty()){
        
        for(let i = 0; i < collection.length; i++){
            if(value[1] < collection[i][1] ){
                collection.splice(i,0,value);
                added = true; 
                break;
            }
        }

    }

    if(!added){
        collection.push(value);
    }

 }

}

var pq = new priorityQueue(); 
pq.printCollection();
pq.enqueue(["Bill", 4]);
pq.enqueue(["Mark", 3]);
pq.enqueue(["Woz", 7]);
pq.enqueue(["Steve", 0]);
pq.printCollection();