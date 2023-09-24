const myLibrary = [];
const DUMMY_TITLE = "dummy title";
const DUMMY_AUTHOR = "dummy author";
const DUMMY_PAGE_COUNT = "420";
const DUMMY_READ_STATUS = "not read... yet";

function Book(title, author, pageCount, readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus; 
    this.info = function() {
        let infoString = this.title + ", " + this.author + ", "
                    + pageCount + ", " + this.readStatus;
        return infoString;
    }
}

function addBookToLibrary(bookObject){
    myLibrary.push(bookObject);
}

function displayLibrary(){
    const libraryDisplay = document.querySelector(".library");
    for(let entry in myLibrary){
        const book = createBookElement(entry);
        libraryDisplay.appendChild(book);
    }
}

function createBookElement(bookObject){
    const book = document.createElement("div");
    book.classList.add("book-container");

    const titleTxt = document.createElement("h3");
    titleTxt.textContent = bookObject.title;
    book.appendChild(titleTxt);

    const authorTxt = document.createElement("h4");
    authorTxt.textContent = bookObject.author;
    book.appendChild(authorTxt);

    const pageCountTxt = document.createElement("h4");
    pageCountTxt.textContent = "Page Count: " + bookObject.pageCount;
    book.appendChild(pageCountTxt);

    const readStatusTxt = document.createElement("h4");
    readStatusTxt.textContent = bookObject.readStatus;
    book.appendChild(readStatusTxt);
    return book;
}

let book1 = new Book(DUMMY_TITLE, DUMMY_AUTHOR, DUMMY_PAGE_COUNT, DUMMY_READ_STATUS);
let book2 = new Book(DUMMY_TITLE, DUMMY_AUTHOR, DUMMY_PAGE_COUNT, DUMMY_READ_STATUS);
let book3 = new Book(DUMMY_TITLE, DUMMY_AUTHOR, DUMMY_PAGE_COUNT, DUMMY_READ_STATUS);
let book4 = new Book(DUMMY_TITLE, DUMMY_AUTHOR, DUMMY_PAGE_COUNT, DUMMY_READ_STATUS);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
console.log(myLibrary.toString());

displayLibrary();
/*
let someBook = new Book("Yo I'm a book", "Me, of course", 101 , "not read yet");
console.log(someBook.info());
*/