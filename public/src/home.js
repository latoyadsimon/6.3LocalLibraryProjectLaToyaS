function getTotalBooksCount(books) {
  return books.length;
}
//returns the length of the books array

function getTotalAccountsCount(accounts) {
  return accounts.length;
}
//returns the length of the accounts array

function getBooksBorrowedCount(books) {
  return books.reduce((counter, book) => {
    !book.borrows[0].returned ? counter ++ : null;
    return counter;
  }, 0);
}
//will return the count of books that have not been returned

function _sortingBooks(toBeSorted){
  toBeSorted.sort((objA, objB) => objB.count - objA.count)
  toBeSorted.splice(5);
  return toBeSorted;
}
//helper function

function getMostCommonGenres(books) {
  const mostCommonGenres = books.reduce((genres, book) => { 
    const genreObj = genres.find(currGenre => currGenre.name === book.genre); 
    !genreObj ? genres.push({
      name: book.genre,
      count : 1,
    }) : genreObj.count++;
    return genres;
  }, []);
  _sortingBooks(mostCommonGenres);
  return mostCommonGenres;
}

function getMostPopularBooks(books) {
  const popularBooks = books.map(book => {return {name: book.title,
    count: book.borrows.length}})
    popularBooks.sort((bookA, bookB) => bookB.count - bookA.count);
    popularBooks.splice(5);
    return popularBooks;
}



function getMostPopularAuthors(books, authors) {
  const popularAuthors = authors.map(author => {
    const authorName = `${author.name.first} ${author.name.last}`;
    const booksBy = books.filter(book => book.authorId === author.id);
    const borrows = booksBy.reduce((total, book) => total + book.borrows.length, 0);
    const authorInfo = {
      name: authorName,
      count: borrows,
    };
    return authorInfo;
  });
  _sortingBooks(popularAuthors);
  /*shorten this using a helper function.
  popularAuthors.sort((authA, authB) => authB.count - authA.count);
  popularAuthors.splice(5);
  */

  return popularAuthors;
}





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
