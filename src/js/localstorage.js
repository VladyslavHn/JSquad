

const localStorageBooks = {
    key: 'books',
    books: [],
  
    getAllBooks: function () {
      if (localStorage.getItem(this.key) === null) {
        return [];
      } else {
        return JSON.parse(localStorage.getItem(this.key));
      }
    },
  
    isBookExsist: function (id) {
      if (localStorage.getItem(this.key) === null) {
          this.books = [];
        } else {
          this.books = JSON.parse(localStorage.getItem(this.key));
        }
      const bookIndex = this.books.findIndex(item => {
          return item._id === id;
        });
        if(bookIndex !== -1){
          return true;
        }else{
          return false;
        }
    },
  
    addBookToFavorites: function (book) {
      if (localStorage.getItem(this.key) === null) {
        this.books = [];
      } else {
        this.books = JSON.parse(localStorage.getItem(this.key));
      }
      if(this.isBookExsist(book._id)){
  console.log("Oops, this book already in shopping list");
      }else{
          this.books.push(book);
          localStorage.setItem(this.key, JSON.stringify(this.books));
      }
    },
  
    removeBookFromFavorites: function (id) {
      if (localStorage.getItem(this.key) === null) {
          this.books = [];
        } else {
          this.books = JSON.parse(localStorage.getItem(this.key));
        }
      const itemBookById = this.books.findIndex(item => {
        return item._id === id;
      });
      this.books.splice(this.books.indexOf(itemBookById), 1);
      localStorage.setItem(this.key, JSON.stringify(this.books));
    },
  };

   export default localStorageBooks;