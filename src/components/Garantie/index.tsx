import React, { FC } from 'react';

import garantieRed from '../../assets/img/garantie-red.png';
import garantieBlue from '../../assets/img/garantie-blue.png';
import garantieGreen from '../../assets/img/garantie-green.png';

import './index.scss';

interface IProps {
    list: Array<IList>
}

interface IList {
    content: string;
}

const Garantie:FC<IProps> = ({list}) => {
    const garanties = list?.map(({content}, index) => {
        return (
            <li key={index}>
                {content}
            </li>
        )
    })
  return (
    <section className="section section-garantie">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ul className="garantie-list">
                        {garanties}
                    </ul>
                </div>

                <div className="col-md-6">
                    <div className="garantie-certificates">
                        <div>
                            <img src={garantieBlue} alt="garantie certificate" />
                        </div>
                        <div>
                            <img src={garantieRed} alt="garantie certificate" />
                        </div>
                        <div>
                            <img src={garantieGreen} alt="garantie certificate" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <button className="btn btn-theme w-100">massa enim nec dui</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Garantie;
