function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  
  //It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
  // look inside of the books array count the wanted account each time
  //should return the number of times an account has created a 'borrow' record
  // books.book.borrows.id is where I'm trying to get 
  
  ///for (let book in books){
    let sum = 1; 
    books.filter((book) => book.borrows.id === account.id);
    sum++;
    return sum;
  }
  




//should return all of the books taken out by an account with the author embedded:
// look in account object to return books by certain author
//the book array has links to the account and authors array by ids
//returns an array of book objects with an author object for each book checked out
function getBooksPossessedByAccount(account, books, authors) {
  const idNum = account.id;
  let possessedBooks = [];
  const findAuthor = (authors, id) => authors.find(author => author.id === id);
  possessedBooks = books.filter(book => book.borrows[0].id === idNum && !book.borrows[0].returned);
  possessedBooks = possessedBooks.map(book => {
    const authorInfo = findAuthor(authors, book.authorId);
    const possessedBook = {...book, author: authorInfo};
    return possessedBook;
  });
  return possessedBooks;
}
  /*let sum = 1;
  // your solution here
  books.filter((book) => book.borrows.id === account.id);
  return books.map(book) => `${authors.author} : ${author}`);
  */
  
  //accounts.forEach((account) => sum += point);
  
//}
//}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
