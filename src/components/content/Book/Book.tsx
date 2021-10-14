import type { FunctionComponent } from 'react';
import { Rating } from '../../data/Rating/Rating';

import { Bookmark } from '../../misc/Bookmark/Bookmark';

import './Book.scss';

interface Props {
  title: string;
  rating: string;
  author: string;
  image: string;
  bookmarked?: boolean;
  onBookmark?: () => void;
}

export const Book: FunctionComponent<Props> = (props) => {
  const imageAlt = `${props.title} cover`;

  return (
    <div className="bs-book">
      <div className="bs-book__bookmark">
        <Bookmark />
      </div>

      <img className="bs-book__image" src={props.image} alt={imageAlt} />
      <div className="bs-book__rating">
        <Rating value={parseFloat(props.rating)} />
      </div>
      <div className="bs-book__title">{props.title}</div>
      <div className="bs-book__author">{props.author}</div>
    </div>
  );
};
