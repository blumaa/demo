const BOOK_URL = 'http://localhost:3000/books/';

//promise chaining
const fetchBooks = () => {
  data 
  fetch(BOOK_URL)
    .then(response => response.json())
    .then(books => renderBookList(books))
    .catch(error => console.error(error));
};

const renderBookList = books => {
  books.forEach(createLi);
};

const createLi = book => {
  const bookList = document.getElementById('list');
  let li = document.createElement('li');
  li.innerText = book.title;
  li.dataset.id = book.id;
  li.addEventListener('click', fetchBook);
  bookList.append(li);
};

//fetch single book

//promise chain
const fetchBook = event => {
  let bookId = event.target.dataset.id;
  fetch(BOOK_URL + bookId)
    .then(response => response.json())
    .then(book => renderSingleBook(book))
    .catch(error => console.error(error));
};

const renderSingleBook = book => {
  const panel = document.getElementById('show-panel');
  //clears panel
   panel.innerHTML = '';

  //adds book title
  const h1 = document.createElement('h1');
  h1.innerText = book.title;
  panel.append(h1);

  //adds book image
  const img = document.createElement('img');
  img.src = book.img_url;
  panel.append(img);

  //adds book description
  const textArea = document.createElement('textarea');
  textArea.value = book.description;
  panel.append(textArea);

  //add save button
  const saveButton = document.createElement('button');
  saveButton.innerText = 'Save';
  saveButton.dataset.id = book.id;
  saveButton.addEventListener('click', handleEdit);

  panel.append(saveButton);
};

const handleEdit = event => {
  const bookId = event.target.dataset.id;
  const div = event.target.parentNode;
  const description = div.querySelector('textarea').value;
  const data = { description };
  editBook(bookId, data);
};

const editBook = (bookId, data) => {
  console.log(data)
  const reqObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  };
 
    return fetch(BOOK_URL + bookId, reqObj);

};

fetchBooks();

//async await
// const fetchBooks = async () => {
//   try {
//     const response = await fetch(BOOK_URL);
//     const books = await response.json();
//     renderBooks(books);
//   } catch (error) {
//     console.error(error);
//   }
// };

//async;
// const fetchBook = async event => {
//   try {
//     let bookId = event.target.id;
//     const response = await fetch(BOOK_URL + bookId);
//     const book = await response.json();
//     renderSingleBook(book);
//   } catch (error) {
//     console.error(error);
//   }
// };
