import { Heading } from './Heading';

export default {
  title: 'Components/General/Heading',
  component: Heading,
  argTypes: {
    level: {
      description: 'The heading level.',
      control: 'select',
      options: [1, 2, 3],
    },
  },
};

interface Args {
  level: 1 | 2 | 3;
}

export const Default = (args: Args) => {
  return <Heading level={args.level}>Lorem ipsum sit dolar amet</Heading>;
};

Default.args = {
  level: 1,
};
