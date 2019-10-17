const BOOK_URL = 'http://localhost:3000/books/';

const API = {
  fetchBooks: async () => {
    try {
      const response = await fetch(BOOK_URL);
      const books = await response.json(); 
      renderBookList(books);
    } catch (error) {
      console.error(error);
    }
  },

  fetchBook: async event => {
    try {
      const bookId = event.target.dataset.id;
      const response = await fetch(BOOK_URL + bookId);
      const book = await response.json();
      renderSingleBook(book);
    } catch (error) {
      console.error(error);
    }
  },

  editBook: (bookId, data) => {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    };

    return fetch(BOOK_URL + bookId, reqObj);
  }
};

API.fetchBooks();
