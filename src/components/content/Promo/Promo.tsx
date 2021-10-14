import type { FunctionComponent } from 'react';

import { Heading } from '../../general/Heading/Heading';
import { Preamble } from '../../general/Preamble/Preamble';

import image from './promo-image.png';
import appStoreBadge from './badge-app-store.png';
import googlePlayBadge from './badge-google-play.png';

import './Promo.scss';

export const Promo: FunctionComponent = () => {
  return (
    <div className="bs-promo">
      <div className="bs-promo__left">
        <div className="bs-promo__content">
          <div className="bs-promo__title">
            <Heading level={2}>
              Always with you.
              <br />
              Ready to help you.
            </Heading>
          </div>

          <div className="bs-promo__text">
            <Preamble>
              With our app you can scan books on the go, <br /> see what your
              friends are reading, and more.
            </Preamble>
          </div>

          <div className="bs-promo__apps">
            <img
              className="bs-promo__badge"
              src={appStoreBadge}
              alt="Download app on App Store."
            />

            <img
              className="bs-promo__badge"
              src={googlePlayBadge}
              alt="Download app on Google Play."
            />
          </div>
        </div>
      </div>

      <div className="bs-promo__right">
        <img src={image} />
      </div>
    </div>
  );
};
