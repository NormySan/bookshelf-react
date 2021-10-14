import { Book } from './Book';

import cover from '../../../images/covers/skyward.jpg';

export default {
  title: 'Components/Content/Book',
  component: Book,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 1,
        max: 5,
      },
    },
  },
};

interface Args {
  title: string;
  rating: number;
  author: string;
}

export const Default = (args: Args) => {
  return (
    <div style={{ width: '190px' }}>
      <Book
        title={args.title}
        rating={String(args.rating)}
        author={args.author}
        image={cover}
      />
    </div>
  );
};

Default.args = {
  title: 'Skyward',
  rating: 4,
  author: 'Brandon Sanderson',
};
