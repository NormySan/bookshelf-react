import { Link } from '@tanstack/react-router';

interface BookCardProps {
  book: {
    id: string;
    title: string;
    cover: string;
    authors: Array<{
      id: string;
      name: string;
    }>;
  };
}

export function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col items-start">
      <Link
        className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
        to="/book/$id"
        params={{ id: String(book.id) }}
      >
        <img className="rounded" src={book.cover} alt={book.title} />
      </Link>

      <Link
        className="mt-2 font-serif text-2xl font-bold decoration-2 outline-none hover:underline hover:decoration-amber-500"
        to="/book/$id"
        params={{ id: String(book.id) }}
      >
        {book.title}
      </Link>

      <div className="flex gap-1">
        {book.authors.map((author) => (
          <Link
            className="mt-1 text-sm text-neutral-600 hover:underline"
            key={author.id}
            to="/author/$id"
            params={{ id: String(author.id) }}
          >
            {author.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
