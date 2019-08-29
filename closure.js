

//Closure is a property of javascript where you can access 
//the outer function's scope from an inner function:

function Outer(){

  var x = "Outer being called from inner"; 

   function inner(){
      console.log(x);
   }

   inner();
}

Outer();