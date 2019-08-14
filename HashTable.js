
//FInd the Index: 
var Hash = function(string, value){
    
    var l = string.length; 
    var sum = 0;
 
    for(let i=0; i < l; i++){
      var j = string.charCodeAt(i);
      sum += j;
    }
 
    console.log(string + " is stored at index" + (sum % value) )
    return (sum % value);
 
 }
 
 //hashTable function: 
 var Hashtable = function(){
 
   //THe Hashtable :   
   var storage = []; 
 
   //The Hashtable length: 
   const storageItem = 4;
 
   //Prints out the hashtable: 
   this.print = function(){
       console.log(storage);
   }
 
   //Adding item into the HashTable: 
   this.addition = function(key,value){
       //Finding the index of the key so that it can pushed into the hashtable:
       var index = Hash(key,storageItem); 
        
       //If the hashtable does not contain any value at that particular index: 
       if(storage[index] === undefined){
         storage[index] = [[key,value]];
       }else{
          //If there is some value already at that particluar index: 
          var inserted = false; 
          for(let i = 0; i < storage[index].length; i++){
              //If you are changing the value of the particular index's array: 
              if(storage[index][i][0] === key ){
                 storage[index][i][1] = value;
                 inserted = true;
              }
          }
 
          //If you can't find the key then add at end of that particular index: 
          if(inserted === false){
              storage[index].push([key,value]);
          }
 
       }
 
   } 
 
   this.remove = function(key){
       //finding the index at which the key is present: 
       var index = Hash(key ,storageItem); 
       //once you get the index you need to find out wether that index is actually present or is empty: 
       //If the length of that particular index is 1 then goahead and delete it: 
       if(storage[index].length === 1 && storage[0][0] === key ){
          delete storage[index]; 
       }else{
 
         //If there are multiple array's of key and value at that index: 
         for(let i = 0; i < storage[index].length; i++){
             if(storage[index][i][0] === key){
                 //Deleting that particular index of the array: 
                 delete storage[index][i]; 
             }
         }
 
       }
 
   }; 
 
   this.lookup = function(key){
       //Finding the index: 
       var index = Hash(key, storageItem);
 
       //Once you get the index and then you can find out from the storage(hash table):
       if(storage[index].length === 1 && storage[index][0][0] === key){
           return storage[index][0][1]; 
       }else if(storage[index] === undefined){
           return undefined;
       }else{
 
           //First get the storage: 
           for(let i = 0; i < storage[index].length; i++){
               if(storage[index][i][0] === key ){
                   //and then get the array data: 
                   return storage[index][i][1];
               }
           }
 
 
       }  
 
 
   }
   
 }
 
 const n1 = new Hashtable(); 
 n1.addition("apple", "steve");
 //changing the value of steve: 
 n1.addition("apple", "woz");
 //adding some more values: 
 n1.addition("code", "Mark");
 
 //Looing up: 
 //checking for mark: 
 console.log("THe code is " + n1.lookup("code"));
 console.log("THe apple is " + n1.lookup("apple"));
 n1.print();
 
 


