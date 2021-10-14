import { Accordion as AccordionComponent } from './Accordion';

export default {
  title: 'Components/Data/Accordion',
  component: AccordionComponent,
};

const items = [
  {
    id: 1,
    title: 'Is the service really 100% free to use?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque laoreet enim, vitae posuere massa. Curabitur laoreet quis mi sit amet vestibulum. Morbi et magna lacus. Fusce tempor ipsum id neque auctor molestie.',
  },
  {
    id: 2,
    title: 'How many active users are there?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque laoreet enim, vitae posuere massa. Curabitur laoreet quis mi sit amet vestibulum. Morbi et magna lacus. Fusce tempor ipsum id neque auctor molestie.',
  },
  {
    id: 3,
    title: 'Who owns the rights to all of the reviews posted?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque laoreet enim, vitae posuere massa. Curabitur laoreet quis mi sit amet vestibulum. Morbi et magna lacus. Fusce tempor ipsum id neque auctor molestie.',
  },
  {
    id: 4,
    title: 'Why are some books missing a score?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque laoreet enim, vitae posuere massa. Curabitur laoreet quis mi sit amet vestibulum. Morbi et magna lacus. Fusce tempor ipsum id neque auctor molestie.',
  },
  {
    id: 5,
    title: 'Why can’t I find a specific book?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque laoreet enim, vitae posuere massa. Curabitur laoreet quis mi sit amet vestibulum. Morbi et magna lacus. Fusce tempor ipsum id neque auctor molestie.',
  },
  {
    id: 6,
    title: 'What do I do if I find an error?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque laoreet enim, vitae posuere massa. Curabitur laoreet quis mi sit amet vestibulum. Morbi et magna lacus. Fusce tempor ipsum id neque auctor molestie.',
  },
];

export const Accordion = () => <AccordionComponent items={items} />;
