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
    for(const bookObject of myLibrary){
        const book = createBookElement(bookObject);
        libraryDisplay.appendChild(book);
    }
}

function resetLibrary(){
    const libraryDisplay = document.querySelector(".library");
    libraryDisplay.replaceChildren();
}

function createBookElement(bookObject){
    const book = document.createElement("div");
    book.classList.add("book-container");

    const titleTxt = document.createElement("h3");
    titleTxt.textContent = "Title: " + bookObject.title;
    book.appendChild(titleTxt);

    const authorTxt = document.createElement("h4");
    authorTxt.textContent = "Author: " + bookObject.author;
    book.appendChild(authorTxt);

    const pageCountTxt = document.createElement("h4");
    pageCountTxt.textContent = "Page Count: " + bookObject.pageCount;
    book.appendChild(pageCountTxt);

    const readStatusTxt = document.createElement("h4");
    readStatusTxt.textContent = "Status:" + bookObject.readStatus;
    book.appendChild(readStatusTxt);
    return book;
}

const dialogForm = document.getElementById("add-book-dialog");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pageCountInput = document.getElementById("page-count");
const readStatusInput = document.getElementById("read-status");
const addBttn = document.getElementById("formAddBttn");

const openDialogBttn = document.querySelector(".new-book");
openDialogBttn.addEventListener("click", () => {
    dialogForm.showModal();
});

dialogForm.addEventListener("close", (event) => {
    if(dialogForm.returnValue !== "cancelled"){
        resetLibrary();
        displayLibrary();
    }
});

addBttn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = new Book(authorInput.value,  titleInput.value,
                pageCountInput.value, readStatusInput.value);
    addBookToLibrary(newBook);
    dialogForm.close();
});

displayLibrary();