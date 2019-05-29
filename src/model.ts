interface InfoSwipe {
  title: string,
  content: string
}

interface Book {
  imgUrl: string,
  name: string,
  author: string
}

interface BooksWithTitle {
  title: string,
  books: Array<Book>
}

interface HomeData {
  infoSwipe?: Array<InfoSwipe>,
  booksWithTitle?: Array<BooksWithTitle>,
}

export {
  InfoSwipe,
  HomeData,
  Book
}
