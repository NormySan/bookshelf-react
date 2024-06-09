import { api } from '../api';
import { BookCard } from '../components/BookCard';
import { graphql } from '../generated/api';
import { createFileRoute } from '@tanstack/react-router';

const frontpageQuery = graphql(`
  query FrontpageQuery {
    topRatedBooks {
      id
      title
      rating
      authors {
        id
        name
      }
    }
  }
`);

export const Route = createFileRoute('/')({
  component: Index,
  loader() {
    return api.request(frontpageQuery);
  },
});

function Index() {
  const { topRatedBooks } = Route.useLoaderData();

  return (
    <div className="container mx-auto mt-12 flex gap-4">
      {topRatedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={{
            ...book,
            cover: `http://localhost:5255/images/books/${book.id}.jpg?width=400&height=600`,
          }}
        />
      ))}
    </div>
  );
}
