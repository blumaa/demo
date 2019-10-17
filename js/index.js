const { fetchBook, editBook } = API;

const renderBookList = books => {
  books.forEach(createLi);
};

const createLi = book => {
  const bookList = document.getElementById('list');
  bookList.innerHTML += `
  <li data-id=${book.id}>${book.title}</li>`;
  bookList.addEventListener('click', fetchBook);
};

const renderSingleBook = book => {
  const panel = document.getElementById('show-panel');

  //clears panel
  panel.innerHTML = '';

  panel.innerHTML = `
  <h1>${book.title}</h1>
  <img src=${book.img_url}>
  <textarea>${book.description}</textarea>
  <button id='save-button' data-id="${book.id}">Save</button>
`;

  const saveButton = document.querySelector('#save-button');
  saveButton.addEventListener('click', handleEdit);
};

const handleEdit = event => {
  let bookId = event.target.dataset.id;
  let div = event.target.parentElement;
  const description = div.querySelector('textarea').value;
  const data = { description };
  editBook(bookId, data);
};
