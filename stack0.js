//FIFO - Remember the Book - The last book u put on a stack is the first book u take out.
//Push - IT is used to add items to your stack. 
//Pop - It is used to delete the last item in the stack
//Peek - To Display the last item in the stack.
//Length - To determine how many elements there are in the stack. 

//Eg for stack is the Word : Palindrome - Palindrome are the words that are spelled both ways it return the same value.

var letters = []; 

var word = "racecar"; 

var rword = "";

//Put letters of the word into the stack : 

//Inserting or pushing data into the stack: 
for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

//Popping off the data from the stack: 
for(let j=0; j < word.length; j++){
    rword += letters.pop();
}

if(rword == word){
    console.log("It is a palindrome!!");
}else{
    console.log("It is not a palindrome!!");
}



