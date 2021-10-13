import React, { FC } from 'react';
import Banner from './Banner';

import './index.scss';

const Footer:FC = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  }
  return (
    <footer id="footer">
        <Banner />

        <div className="footer-bottom">
            <p>Impressum/Datenschutz</p>
            <p className="d-none d-md-block">Copyright &copy; {getYear()} sit amet. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
