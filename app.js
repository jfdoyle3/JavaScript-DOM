var books=document.querySelectorAll('#book-list li .name');
books.forEach(function(book){
   book.textContent +=' (Book Title)';

});

const bookList=document.querySelector('#book-list');
// bookList.innerHTML='<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML';
