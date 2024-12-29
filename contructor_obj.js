// Contructor 
function CreateBook(title, author, pages) {
      this.bookTitle = title;
      this.bookAutor = author;
      this.bookPages = pages;
      this.printBook = function () {
        console.log("printing...");
      }
  }
  
  
  const book1 = new CreateBook("atomic", "james", 306)
  const book2 = new CreateBook("think", "Napolean", 450)
  
  book1.color = "white" //aplicando propridade posteriormente
  