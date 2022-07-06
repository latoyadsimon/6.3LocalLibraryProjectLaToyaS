function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const outBooks = books.filter((book) => book.borrows.some(trans => !trans.returned)); 
//if every book is returned it will be inbooks
const inBooks = books.filter((book) => book.borrows.every(trans => trans.returned));
//putting my arrays together
const allBooksStatus = [outBooks, inBooks];
//returning array
return allBooksStatus;
}



function getBorrowersForBook(book, accounts) {
  return book.borrows.map(trans => {
    const account = accounts.find(account => account.id === trans.id);
    return {...trans, ...account};
  }).slice(0,10);
  
}
 
    

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
