import { Rating } from './Rating';

export default {
  title: 'Components/Data/Rating',
  component: Rating,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
      },
    },
  },
};

interface Args {
  value: number;
}

export const Default = (args: Args) => {
  return <Rating value={args.value} />;
};

Default.args = {
  value: 4,
};
