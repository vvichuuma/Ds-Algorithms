let myMap = function(){

  //Empty Map:   
  this.collection = {}; 

  //Size of the Map: 
  this.count = 0; 
   
  //returns the size of the Map: 
  this.size = function(){
      return this.count; 
  };

  //adds elements onto the map: 
  this.set = function(key, value){
     this.collection[key] = value; 
     this.count++;
  };

  //See if this has the Key in the Map: 
  this.has = function(key){
    return (key in this.collection); 
  }; 

  //Gets that particular element: 
  this.get = function(key){
    return (key in this.collection) ? this.collection[key] : null; 
  };

  //deletes that particular value: 
  this.delete = function(key){
      if(key in this.collection){
          delete this.collection[key]; 
          this.count--;
      }
  };
 
  //Loops through the map and returns an array containing the values: 
  this.values = function(){
     let result = []; 
     for(let key of Object.keys(this.collection)){
         result.push(this.collection[key]);
     }
     return (result.length > 0) ? result : null;
  };

  //clears out the map: 
  this.clear = function(){
      this.collection = {}; 
      this.count = 0; 
  };
  

}

let map = new myMap(); 
map.set('arms', 2); 
map.set('fingers' , 10); 
map.set('eyes' , 2); 
map.set('belly button', 1); 
console.log(map.get('fingers'));
console.log(map.size()); 
console.log(map.values());

