// books class - Represnets a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks

class UI {

    static DisplayBooks() {

        const books = Store.getBooks();

        books.forEach((book) => {
            UI.addBooksToList(book)
        });


    }

    static addBooksToList(book) {

        var list = document.querySelector('#book-list-contanier');

        var row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><i class="fas fa-times btn btn-danger btn-sm delete-list-btn"></i></td>
        `

        list.appendChild(row);

    }

    static clearTextFields() {
        document.querySelector('#book-title').value = " ";

        document.querySelector('#book-author').value = " "

        document.querySelector('#book-code').value = " ";
    }

    static deleteBook(el) {
        if (el.classList.contains('delete-list-btn')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(alertmsg, alertType, alertsymbol) {

        const container = document.querySelector('.container');
        const bookFormSection = document.querySelector('#add-book-form');
        const div = document.createElement('div');
        const p = document.createElement('p');

        div.classList.add('alert', `alert-${alertType}`);
        p.classList.add('lead', 'm-0', 'p-0', 'fw-bold');

        div.appendChild(p)
        p.innerHTML = `<i class='fas fa-${alertsymbol} me-3'></i>${alertmsg}`

        container.insertBefore(div, bookFormSection)

        setTimeout(() => {
            div.remove();
        }, 3000);

    }

}


// Store Class : Handles Local Storage

class Store {

    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }

        })
        localStorage.setItem('books', JSON.stringify((books)));
    }

}

// Event : Display Books

document.addEventListener('DOMContentLoaded', UI.DisplayBooks)

// Event : Add a Book in UI

const form = document.querySelector('#add-book-form').addEventListener('submit', (e) => {
    // prevent default behavior of form loading
    e.preventDefault();

    // getting values form inputs

    const title = document.querySelector('#book-title').value;

    const author = document.querySelector('#book-author').value

    const isbn = document.querySelector('#book-code').value;

    var titleval = title.replace(/^\s+/, '').replace(/\s+$/, '');
    var authorval = author.replace(/^\s+/, '').replace(/\s+$/, '');
    var isbnval = isbn.replace(/^\s+/, '').replace(/\s+$/, '');

    // setting the values in an object

    const book = new Book(title, author, isbn);


    // Validating input fields

    if (titleval === '' || authorval === '' || isbnval === '') {
        UI.showAlert("Please Enter a Value !", "danger", "times");
        return false;
    }
    else {
        UI.showAlert("Book added Successfully !", "success", "check");
    }

    // displaying books in UI

    UI.addBooksToList(book);

    // add book in localstorage

    Store.addBook(book);


    // clear textFields

    UI.clearTextFields();

})

// Event: Remove a Book

document.querySelector('#book-list-contanier').addEventListener('click', (e) => {

    // remove book from UI
    UI.deleteBook(e.target);

    // remove book from localstorage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    // success alert 
    UI.showAlert('Book removed successfully !', 'primary', 'check');

})

