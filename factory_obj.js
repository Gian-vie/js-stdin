//Objetos contem varias informaçoes (variaveis) internamente de forma organizada.
// FACTORYs são como "fabricas" que geram esses objetos de froma automatica.

/** EXEMPLO DE OBJETO
 *
 * const book = {
 *      bookTitle: "titulo do livro",
 *      bookAutor: "Nome do Autor",
 *      bookPages: "numero de paginas",
 *      printBook: function() { // pode ter funçoes dentro dos Objetos
 *          console.log("printing...")
 *      },
 *      bookCapters: { // pode ter objetor dentro de objetos
 *          capter1: "capitulo 1"
 *          capter2: "capitulo 2"
 *          capter3: "capitulo 3"
 *      }
 * }
 */

// Factory 
function createBook(title, author, pages) {
  const book = {
    bookTitle: title,
    bookAutor: author,
    bookPages: pages,
    printBook: function () {
      console.log("printing...");
    },
  };
  return book // declarando o retorno dessa função
}


const book1 = createBook("atomic", "james", 306)
const book2 = createBook("think", "Napolean", 450)