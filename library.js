const libraryArray = [];

class Book {
    constructor(title, author, pageCount, readStatus){
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.readStatus = readStatus; 
    }

    toggleReadStatus() {
        if(this.readStatus === "Read")
        this.readStatus = "Not Read";
        else
            this.readStatus = "Read";
    }
}

function addBookToLibraryArray(bookObject){
    libraryArray.push(bookObject);
}

function displayLibrary(){
    const libraryDisplay = document.querySelector(".library");
    for(let i = 0; i < libraryArray.length; i++){
        const book = createBookElement(libraryArray[i], i);
        libraryDisplay.appendChild(book);
    }
}

function resetLibraryDisplay(){
    const libraryDisplay = document.querySelector(".library");
    libraryDisplay.replaceChildren();
}

function createBookElement(bookObject, index){
    const book = document.createElement("div");
    book.classList.add("book-container");
    book.setAttribute("data-index", index);

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
    readStatusTxt.classList.add("read-status");
    readStatusTxt.textContent = "Status:" + bookObject.readStatus;
    book.appendChild(readStatusTxt);

    const deleteBttn = document.createElement("button");
    deleteBttn.textContent = "Delete"
    deleteBttn.addEventListener("click", deleteBook);
    book.appendChild(deleteBttn);

    const readStatusBttn = document.createElement("button");
    readStatusBttn.textContent = "Toggle Read Status";
    readStatusBttn.addEventListener("click", toggleReadStatusDisplay);
    book.appendChild(readStatusBttn);

    return book;
}

function deleteBook(event){
    const bookNode = event.target.parentNode;
    const index = Number(bookNode.getAttribute("data-index"));
    libraryArray.splice(index, 1);
    resetLibraryDisplay();
    displayLibrary();
}

function toggleReadStatusDisplay(event) {
    const bookNode = event.target.parentNode;
    const index = Number(bookNode.getAttribute("data-index"));
    const bookObject = libraryArray[index];

    bookObject.toggleReadStatus();

    const readStatusTxt = bookNode.querySelector(".read-status");
    readStatusTxt.textContent = "Status: " + bookObject.readStatus;
}

const dialogElement = document.getElementById("add-book-dialog");
const addBookForm = document.querySelector(".add-book-form");
const authorInput = document.getElementById("author");
const titleInput = document.getElementById("title");
const pageCountInput = document.getElementById("page-count");
const readStatusInput = document.getElementById("read-status");
const addBttn = document.getElementById("formAddBttn");
const doneBttn = document.getElementById('done-bttn');

function isFormValid(){
    if(
        authorInput.checkValidity() &&
        titleInput.checkValidity() &&
        pageCountInput.checkValidity() &&
        readStatusInput.checkValidity()
    ){
        return true;
    } else{
        return false;
    }
}

const openDialogBttn = document.querySelector(".new-book");
openDialogBttn.addEventListener("click", () => {
    addBookForm.reset();
    dialogElement.showModal();
});

authorInput.addEventListener('input', () => {
    let mssg = document.querySelector('#author + .error-mssg');
    if(authorInput.validity.valueMissing){
        mssg.textContent = 'Please input a name for the author';
        authorInput.classList.add('error');
    } else {
        mssg.textContent = '';
        authorInput.classList.remove('error');
    }
});

titleInput.addEventListener('input', () => {
    let mssg = document.querySelector('#title + .error-mssg');
    if(titleInput.validity.valueMissing){
        mssg.textContent = 'Please input a name for the book';
        titleInput.classList.add('error');
    } else {
        mssg.textContent = '';
        titleInput.classList.remove('error');
    }
});

pageCountInput.addEventListener('input', () => {
    let mssg = document.querySelector('#page-count + .error-mssg');
    if(pageCountInput.validity.valueMissing){
        mssg.textContent = 'Please input a page count for the book';
        pageCountInput.classList.add('error');
    } else {
        mssg.textContent = '';
        pageCountInput.classList.remove('error');
    }
});

doneBttn.addEventListener('click', () => dialogElement.close());

addBttn.addEventListener("click", (event) => {
    event.preventDefault();
    if(isFormValid()){
        const newBook = new Book(authorInput.value,  titleInput.value,
                    pageCountInput.value, readStatusInput.value);
        addBookToLibraryArray(newBook);
        dialogElement.close();
        resetLibraryDisplay();
        displayLibrary();
    }
});

const sampleBook1 = new Book("Me", "Sample Book 1", 50, "Not Read");
addBookToLibraryArray(sampleBook1);
const sampleBook2 = new Book("Me", "Sample Book 2", 45, "Not Read");
addBookToLibraryArray(sampleBook1);
const sampleBook3 = new Book("Me", "Sample Book 3", 60, "Not Read");
addBookToLibraryArray(sampleBook1);
const sampleBook4 = new Book("Me", "Sample Book 4", 34, "Not Read");
addBookToLibraryArray(sampleBook1);
displayLibrary();