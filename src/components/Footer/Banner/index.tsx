import React, { FC } from 'react';

import quote from '../../../assets/img/quote.png';

import './index.scss';

const Banner:FC<{}> = () => {
  return (
    <section className="section section-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-6">
                    <div className="banner-info d-flex align-items-start">
                        <div className="banner-info_icon me-3">
                            <img src={quote} alt="quote icon" aria-roledescription="icon" />
                        </div>
                        <div className="banner-info_main">
                            <h5>
                                nec nam aliquam sem et tortor consequat id
                            </h5>
                            <span>
                                mattis vulputate
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;
