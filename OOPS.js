

function Book(title, author, year){
  
  this.title = title; 
  this.author = author; 
  this.year = year;

}

Book.prototype = {

    getInfo: function(){
        return `The Book - ${this.title} was written by ${this.author} and was published in the year ${this.year}`
    } 

}

const book1 = new Book("Book one" , "John Doe", 2013); 
const book2 = new Book("Book two" , "Jane Doe" , 2016 ); 

console.log(book2.getInfo());

