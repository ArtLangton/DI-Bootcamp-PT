let allBooks = [
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J. K. Rowling",
        image: "https://m.media-amazon.com/images/I/71NaVwWsRDL._SL1038_.jpg",
        alreadyRead: true,
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoyevsky",
        image: "https://m.media-amazon.com/images/I/71O2XIytdqL._SL1500_.jpg",
        alreadyRead: true,
    }
];

let divListBooks = document.querySelector('.listBooks');
let table = document.createElement('table');
divListBooks.appendChild(table);

let headers = ["Title", "Cover", "Author", "Read"];
let thead = table.createTHead();
let row = thead.insertRow();
headers.forEach(headerText => row.appendChild(document.createElement('th')).textContent = headerText);

let tbody = table.createTBody();
allBooks.forEach(book => {
    let tr = tbody.insertRow();
    let titleCell = tr.insertCell();
    titleCell.textContent = book.title;
    let imgCell = tr.insertCell();
    imgCell.appendChild(document.createElement('img')).src = book.image;
    imgCell.querySelector('img').width = 100;
    let authorCell = tr.insertCell();
    authorCell.textContent = `by: ${book.author}`;
    let readCell = tr.insertCell();
    readCell.textContent = book.alreadyRead ? "Yes" : "No";
    tr.style.color = book.alreadyRead ? "green" : "red";

    titleCell.style.marginBottom = "10px";
});

table.style.borderSpacing = "30px";
