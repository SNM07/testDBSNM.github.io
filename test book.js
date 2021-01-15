export class Book {
  constructor (title, author, description, pages, currentPage, read){
  this.title = title;
  this.author = author;
  this.description = description;
  this.pages = pages;
  this.currentPage = currentPage;
  this.read = read;
  }
  readBook(page){
  if (page > this.pages || page < 1) 
      return 0;
  if (page > 0 && page < this.pages) {
      this.currentPage = page;
      return 1;
    } 
  if (page === this.pages){
      this.currentPage = page;
      this.read = true;
      return 1;
  }
    }
}
const zola = new Book('Germinal', "Zola", "roman", 300, 12, false);
const fabcaro = new Book('Zaizaizaizai', "Fabcaro", "bd", 100, 58, false);
const poix = new Book('Là d où je viens a disparu', "Guillaume Poix", "roman", 280, 200, false);
export const books = [zola, fabcaro, poix];
