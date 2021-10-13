import React from 'react';

import dka from '../../assets/img/dka.png';
import shops from '../../assets/img/shops.png';
import trust from '../../assets/img/trust.png';
import pinkCircle from '../../assets/img/pink-circle.png';

import './index.scss';

const Hero = () => {
  return (
    <section id="hero">
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 relative">
                        <img className="pink-circle_item" src={pinkCircle} alt="item" />
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
            <div className="col-lg-4 offset-lg-8">
                <div className="hero-box">
                    <h4 className="hero-box_title">
                        QUIS COMMODO ODIO AENEAN SED ADIPISCING DIAM DONEC ADIPISCING
                    </h4>
                    <button className="btn btn-theme w-100">montes</button>
                    <ul className="hero-rating_list">
                        <li>
                            <img src={dka} alt="logo partner" aria-roledescription="logo" />
                        </li>
                        <li>
                            <img src={shops} alt="logo partner" aria-roledescription="logo" />
                        </li>
                        <li>
                            <img src={trust} alt="logo partner" aria-roledescription="logo" />
                        </li>
                        <li>
                            <div className="rating-stars">
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;
