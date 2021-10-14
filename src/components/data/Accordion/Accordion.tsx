import { useState } from 'react';
import type { FunctionComponent, Key, ReactNode } from 'react';
import { Preamble } from '../../general/Preamble/Preamble';

interface Item {
  id: Key;
  title: ReactNode;
  content: ReactNode;
}

interface Props {
  items: Item[];
}

interface AccordionItemState extends Item {
  open: boolean;
}

type UseAccordionTupple = [
  items: AccordionItemState[],
  toggle: (id: Key) => void
];

function useAccordion(initialItems: Item[]): UseAccordionTupple {
  const [items, setItemsState] = useState<AccordionItemState[]>(() => {
    return initialItems.map((item) => ({
      ...item,
      open: false,
    }));
  });

  function toggleItem(id: Key): void {
    setItemsState(
      items.map((item) => ({
        ...item,
        open: id === item.id ? !item.open : item.open,
      }))
    );
  }

  return [items, toggleItem];
}

const OpenIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0V18"
        stroke="#BA3FCA"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M0 9H18"
        stroke="#BA3FCA"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1H18"
        stroke="#BA3FCA"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const Accordion: FunctionComponent<Props> = (props) => {
  const [items, toggle] = useAccordion(props.items);

  function onToggle(id: Key) {
    return () => toggle(id);
  }

  return (
    <div className="bs-accordion">
      {items.map((item) => (
        <div className="bs-accordion__item" key={item.id}>
          <div className="bs-accordion__title" onClick={onToggle(item.id)}>
            <Preamble>{item.title}</Preamble>
          </div>

          <CloseIcon />
          <OpenIcon />

          {item.open && (
            <div className="bs-accordion__content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
