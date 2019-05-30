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

interface UserInfo {
  userName: string,
  membershipAge: number,
  actions: Array<number>,
  actionTopics: Array<string>
}

export {
  InfoSwipe,
  HomeData,
  Book,
  UserInfo
}
