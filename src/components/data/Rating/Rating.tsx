import classnames from 'classnames';
import { useState } from 'react';

import type { FunctionComponent, ReactNode } from 'react';

import './Rating.scss';

interface Props {
  value: number;
}

export const Rating: FunctionComponent<Props> = (props) => {
  const [active, setActive] = useState<number>();

  function handleMouseEnter(index: number) {
    return () => {
      setActive(index);
    };
  }

  function handleMouseLeave() {
    return () => {
      setActive(undefined);
    };
  }

  const stars: ReactNode[] = [];

  for (let index = 0; index < 5; index++) {
    const isActive = active !== undefined && active >= index;

    const shouldBeFilled =
      index < Math.floor(props.value) && active === undefined;

    const starClass = classnames('bs-rating__star', {
      'bs-rating__star--filled': shouldBeFilled || isActive,
    });

    stars.push(
      <div
        className={starClass}
        onMouseEnter={handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave()}
      >
        ★
      </div>
    );
  }

  return <div className="bs-rating">{stars.map((star) => star)}</div>;
};
