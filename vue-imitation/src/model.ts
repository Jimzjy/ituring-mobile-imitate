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
  articles?: Array<Article>
}

interface UserInfo {
  userName: string,
  membershipAge: number,
  actions: Array<number>,
  actionTopics: Array<string>
}

interface Article {
  title: string,
  date: string,
  actions: Array<number>,
  tags: Array<string>,
  topics: Array<string>,
  author: string,
  avatar: string
}

export {
  InfoSwipe,
  HomeData,
  Book,
  UserInfo,
  Article
}
