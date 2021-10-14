import classnames from 'classnames';

import type { FunctionComponent } from 'react';

import './Bookmark.scss';

interface Props {
  bookmarked?: boolean;
}

export const Bookmark: FunctionComponent<Props> = (props) => {
  const bookmarkClass = classnames('bs-bookmark', {
    'bs-bookmark--bookmarked': props.bookmarked,
  });

  return (
    <div className={bookmarkClass}>
      <svg
        width="40"
        height="57"
        viewBox="0 0 40 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H40V57L20 44.9091L0 57V0Z" fill="currentColor" />
        <path
          d="M20 12V30"
          stroke="white"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M11 21H29"
          stroke="white"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
