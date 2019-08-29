//IIFE - Immediately invoked function expression: 

(function(){
    console.log("The IIFE without a name");
})();

(favnum = function(num = 2){
    console.log("The fav num is : " + num);
})();

favnum(5);

console.log("-----");

var a = 2; 

(function(){
    var a = 3;
    console.log(a);
})();

console.log(a);