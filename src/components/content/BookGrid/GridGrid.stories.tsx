import { Book } from '../Book/Book';
import { BookGrid } from '../BookGrid/BookGrid';

import skywardCover from '../../../images/covers/skyward.jpg';
import seaOfStarsCover from '../../../images/covers/to-sleep-in-a-sea-of-stars.jpg';
import woolCover from '../../../images/covers/wool.jpg';
import duneCover from '../../../images/covers/dune.jpg';
import theMartianCover from '../../../images/covers/the-martian.jpg';
import laBelleSauvageCover from '../../../images/covers/la-belle-sauvage.jpg';

export default {
  title: 'Components/Content/BookGrid',
  component: Book,
};

const books = [
  {
    title: 'Skyward',
    rating: 5,
    author: 'Brandon Sanderson',
    cover: skywardCover,
  },
  {
    title: 'To Sleep in a Sea of Stars',
    rating: 4,
    author: 'Christopher Paolini',
    cover: seaOfStarsCover,
  },
  {
    title: 'Wool',
    rating: 5,
    author: 'Hugh Howey',
    cover: woolCover,
  },
  {
    title: 'Dune',
    rating: 4,
    author: 'Frank Herbert',
    cover: duneCover,
  },
  {
    title: 'The Martian',
    rating: 4,
    author: 'Andy	Weir',
    cover: theMartianCover,
  },
  {
    title: 'La Belle Sauvage',
    rating: 4,
    author: 'Philip Pullman',
    cover: laBelleSauvageCover,
  },
];

export const Default = (args: { books: typeof books }) => {
  return (
    <BookGrid title="Popular books" action={<a href="/">Browse all</a>}>
      {args.books.map((book) => (
        <Book
          title={book.title}
          rating={String(book.rating)}
          author={book.author}
          image={book.cover}
        />
      ))}
    </BookGrid>
  );
};

Default.args = {
  books,
};
