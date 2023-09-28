const myLibrary = [];

function Book(title, author, pageCount, readStatus){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus; 
}

function addBookToLibrary(bookObject){
    myLibrary.push(bookObject);
}

function displayLibrary(){
    const libraryDisplay = document.querySelector(".library");
    for(let i = 0; i < myLibrary.length; i++){
        const book = createBookElement(myLibrary[i], i);
        libraryDisplay.appendChild(book);
    }
}

function resetLibrary(){
    const libraryDisplay = document.querySelector(".library");
    libraryDisplay.replaceChildren();
}

function createBookElement(bookObject, index){
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

    book.setAttribute("data-index", index);

    const deleteBttn = document.createElement("button");
    deleteBttn.textContent = "Delete"
    deleteBttn.addEventListener("click", deleteBook);
    book.appendChild(deleteBttn);
    return book;
}

function deleteBook(event){
    const libraryDisplay = document.querySelector(".library");
    const bookNode = event.target.parentNode;
    const index = Number(bookNode.getAttribute("data-index"));
    myLibrary.splice(index, 1);
    libraryDisplay.removeChild(bookNode);
    resetLibrary();
    displayLibrary();
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


const sampleBook1 = new Book("Me", "Sample Book 1", 50, "Not Read");
addBookToLibrary(sampleBook1);
const sampleBook2 = new Book("Me", "Sample Book 2", 45, "Not Read");
addBookToLibrary(sampleBook1);
const sampleBook3 = new Book("Me", "Sample Book 3", 60, "Not Read");
addBookToLibrary(sampleBook1);
const sampleBook4 = new Book("Me", "Sample Book 4", 34, "Not Read");
addBookToLibrary(sampleBook1);
displayLibrary();