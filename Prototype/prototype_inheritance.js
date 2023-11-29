// Given Library constructor. It has name , type and default value isAvailable. Write methods (function ) inside of Library:
// function borrow :by calling  this method it make book unavailable.
// function returnBook - checking if book is not available  - make book available
// function checkAvailability -  return if book is available or not

function Library(author, name) {
    this.author = author;
    this.name = name;
    this.availibility = true;
    this.borrow = function borrow() {
        this.availibility = false
    };
    this.returnBook = function returnBook() {
        if (!this.availibility) {
            this.availibility = true
        }
    };
    this.checkAvailability = function checkAvailability() {
        return (this.availibility) ? true : false
    }
}

const book1 = new Library('Stephen Hawking', 'Brief Answers to the Big Questions')
const book2 = new Library('Robin Sharma', 'The Monk Who Sold His Ferrari')
book1.borrow();
// book1.returnBook();
console.log(book1.checkAvailability())

console.log(book1);
console.log(book2);
