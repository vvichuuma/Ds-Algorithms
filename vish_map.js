
function myMap(){
   
    this.collection = {}; 
    this.count = 0; 

    this.addition = function(key,value){
       this.collection[key] = value; 
       this.count++;
    }

    this.size = function(){
        return this.count;
    }

    this.values = function(){
         for(let i = 0; i < this.count; i++){
             console.log(this.collection[i]);
         } 
    }

}

const map = new myMap(); 
map.addition(0,"jobs"); 
map.addition(1, "Mark Zuckerberg"); 
map.addition(2,"wozniack"); 
console.log('--'); 
(map.values()); 
