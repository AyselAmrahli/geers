import React, { FC } from 'react';

import './index.scss';

interface IProps {
    data: Array<IData>;
}

interface IData {
    title: string;
    desc: string;
}

const Percent:FC<IProps> = ({data}) => {

    const list = data?.map(({title, desc}, index) => {
        return (
            <div className="col-md-4" key={index}>
                <div className="percent-detail">
                    <span className="percent-detail_number">
                        {title}
                    </span>
                    <p className="percent-detail_desc">
                        {desc}
                    </p>
                </div>
            </div>
        )
    })

  return (
    <section className="section section-percent">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h4>sed pulvinar proin gravida hendrerit</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                {list}

                <div className="col-md-4 d-flex align-items-center">
                    <div className="percent-detail">
                        <span className="percent-detail_singleText">
                            *Eurotrak 2018
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Percent;
