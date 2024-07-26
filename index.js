function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data => renderBooks(data))
      .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const booksList = document.getElementById('books-list');
  books.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = book.name;
      booksList.appendChild(listItem);
  });
}
