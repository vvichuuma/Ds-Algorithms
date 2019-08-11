
//set is similar to that of an array except it has no duplicates and the values are arranged in no particular order. 


function mySet(){
    //This will hold the set: 
  var collection = []; 

  //This method will check for the presence of an element and return true or false: 
   this.has = function(element){
      return (collection.indexOf(element) !== -1);
   }

  //THis method will return the values of all the elements in the set: 
  this.values = function(){
      return collection;
  }

  //This method will add an element to the set: 
  this.add = function(element){
      if(!this.has(element)){
        collection.push(element);
        return true;
      }
      return false;
  }

  //This method will remove an element from a set: 
  this.remove = function(element){

    if(this.has(element)){
        index = collection.indexOf(element);
        collection.splice(index,1);
        return true;
    }
    return false;
  }

  //This method will return the size of the array:
  this.size = function(){
      return collection.length;
  }

  //THis method will return the union of two sets: 
  this.union = function(otherSet){
      var unionSet = new mySet(); 
      var firstSet = this.values(); 
      var secondSet = otherSet.values(); 
      firstSet.forEach(function(e){
          unionSet.add(e);
      })
      secondSet.forEach(function(e){
          unionSet.add(e);
      })
      return unionSet;
  }

  //This method will return the intersection of two sets: 
  this.intersection  = function(otherSet){
      var intersectionSet = new mySet(); 
      var firstSet = this.values(); 
      firstSet.forEach((e) => {
         if(otherSet.has(e)){
             intersectionSet.add(e);
         }
      });
      return intersectionSet;
  }

  //THis method will return the difference of two sets: 
  this.difference = function(otherSet){
    var differenceSet = new mySet(); 
    var firstSet = this.values(); 
    firstSet.forEach((e) => {
        if(!otherSet.has(e)){
           differenceSet.add(e);
        }
    })
    return differenceSet;
  }

  //THis method will test if the set is a subset of a different set: 
  //If every element of one set has or contains the element of a subset()
   this.subset = function(otherSet){
       var firstSet = this.values();
       return firstSet.every(function(value){
           return otherSet.has(value);
       })
   }

}

var setA = new mySet(); 
var setB = new mySet();
setA.add("a"); 
setB.add("b"); 
setB.add("c"); 
setB.add("d"); 
setB.add("a");
//If setA is a subset of setB: 
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values);
