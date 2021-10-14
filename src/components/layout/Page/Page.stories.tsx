import { Page as PageComponent } from './Page';

import { Book } from '../../content/Book/Book';
import { BookGrid } from '../../content/BookGrid/BookGrid';
import { Hero } from '../../content/hero/Hero';
import { Link } from '../../general/Link/Link';
import { PageSection } from '../PageSection/PageSection';
import { Promo } from '../../content/Promo/Promo';

import { books } from '../../../data/books';

export default {
  title: 'Components/Layout/Page',
  component: PageComponent,
};

export const Page = () => (
  <PageComponent>
    <PageSection>
      <Hero />
    </PageSection>

    <PageSection contained padded>
      <BookGrid title="Popular books" action={<Link href="#">Browse all</Link>}>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            rating={String(book.rating)}
            author={book.author}
            image={book.cover}
          />
        ))}
      </BookGrid>
    </PageSection>

    <PageSection>
      <Promo />
    </PageSection>

    <PageSection contained padded>
      <BookGrid title="Popular books" action={<Link href="#">Browse all</Link>}>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            rating={String(book.rating)}
            author={book.author}
            image={book.cover}
          />
        ))}
      </BookGrid>
    </PageSection>
  </PageComponent>
);
