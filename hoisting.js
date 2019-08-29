 //variable and functions that are declared , not defined (giving it a value) are hoisted 
 //to the top of the program.

console.log(x);//since this console.log is written be4 the x . it shows undefined but the program knows that there is a varaible x.
var x = 10;
console.log(x);//since this console.log is written after the x. It shows the value x since it is defined.


code();
function code(){
    console.log("zuckerberg created facebook!");
}

