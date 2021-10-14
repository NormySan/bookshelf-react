import type { FunctionComponent } from 'react';

import { Button } from '../../general/Button/Button';
import { Heading } from '../../general/Heading/Heading';

import image from './hero-image.jpg';

import './Hero.scss';

export const Hero: FunctionComponent = () => {
  return (
    <div className="bs-hero">
      <img src={image} className="bs-hero__image" />

      <div className="bs-hero__content">
        <div className="bs-hero__content-inner">
          <div className="bs-hero__title">
            <Heading>
              Something magical will happen when you read a good book.
            </Heading>
          </div>

          <p className="bs-hero__text">
            Bookplace helps you keep track of your reading and meet some new
            friends along the way.
          </p>

          <div className="bs-hero__action">
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
