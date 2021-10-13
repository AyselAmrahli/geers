import React from 'react';

import logo from '../../assets/img/logo.png';

import './index.scss';

const Header = () => {
  return (
    <header id="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="geers-logo">
                        <img src={logo} alt="geers logo" aria-roledescription="logo" />
                    </div>
                </div>

                <div className="col-6">
                    <div className="geers-contact float-md-right">
                        <span className="geers-contact_phone">
                            030 1234 5678
                        </span>
                        <span className="geers-contact_availability d-none d-md-block">
                            Mo - Sa 9 - 18 Uhr
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
