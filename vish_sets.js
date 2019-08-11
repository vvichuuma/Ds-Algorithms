//An array: 
//This method will check for an element or return true / false: 
//This method will return all the elements of an array: 
//This method will add an element in the set: 
//This method will remove an element in the set: 
//This method will return the size of an array: 
//This method will return the union of two sets: 
//This method will return the intersection of two sets: 
//This method will retuern the difference of two sets: 
//This method will return the subset of every element: 

function mySet(){
 //THe set:     
 var collection = [];

 //THis method will return all the elements in the set: 
 this.values = function(){
     return collection;
 }

 //This method will return the size of a given set: 
 this.size = function(){
     return collection.length;
 }

 //This method will check if the element is present in the set: 
 this.has = function(value){
     var a = collection.indexOf(value); 
     if(a !== -1 ){
         return true;
     }else{
         return false;
     } 

 }

 //THis method will add values to the set: 
 this.addition = function(value){
    if(!this.has(value)){
        collection.push(value);
    }
 }

 //This method will delete the particular value from the set: 
 this.deletion = function(value){
     if(this.has(value)){
         let index = collection.indexOf(value);
         collection.splice(index,1);
         console.log(`${value} has been deleted and the rest of the set is - ${this.values()}`);
     }
   
 }

 //This method will return the union of all the elements in both the sets: 
  this.union = function(otherSet){
     var union = new mySet(); 
      var firstSet = this.values(); 
      var secondSet = otherSet.values();
      firstSet.forEach((e) => {
          if(!union.has(e)){
              union.addition(e);
          }
      }) 
      
      secondSet.forEach((e) => {
        if(!union.has(e)){
            union.addition(e);
        }
    }) 

     var codeArray = union.values(); 
     console.log("The union of the set is : ");
     console.log(codeArray);
  }

  //THis method will return the intersection of both the elements in the sets: 
  this.intersection = function(otherSet){
    var interSection = new mySet(); 
    var firstSet = this.values(); 
    var secondSet = otherSet.values(); 
    firstSet.forEach((e) => {
        if(secondSet.includes(e)){
            interSection.addition(e);
        }
    })

     var codeArray = interSection.values();
     console.log("THe intersection of the set is : ");
     console.log(codeArray);
    

  }

  //This method will return the not common elements in both the sets: 
  this.dissection = function(otherSet){
    var dissection = new mySet(); 
    var firstSet = this.values(); 
    var secondSet = otherSet.values(); 
    firstSet.forEach((e) => {
        if(!secondSet.includes(e)){
            dissection.addition(e);
        }
    })

     var codeArray = dissection.values();
     console.log("The dissection of the set is : ");
     console.log(codeArray);
  

  }

  //subset of a given subset: 
  this.subset = function(otherSet){
      var set1 = this.values(); 
      var set2 = otherSet.values(); 
      var count = 0;
      set2.forEach((e) => {
          if(set1.includes(e)){
              count++;
          }; 
      })

      if(count == set2.length){
          return true;
      }else{
          return false;
      }

  }

}

var s1 = new mySet;
var s2 = new mySet; 
s1.addition("a");
s1.addition("b");
s1.addition("c");
s1.addition("d");
s2.addition("c"); 
s2.addition("d");
s2.addition("f");
console.log("THe value of set 1 : ");
console.log(s1.values());
console.log("The value of set 2 is : ");
console.log(s2.values());
s1.intersection(s2);
s1.dissection(s2);
s1.union(s2);
console.log(s1.subset(s2));