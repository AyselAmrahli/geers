import React, { FC } from 'react';

import './index.scss';

interface IProps {
    img: string;
    text: string;
    template?: string;
}

const About:FC<IProps> = ({img, text, template = 'two'}) => {
  return (
    <section className="section section-about">
        <div className="container">
            <div className="section-about_box">
                <div className="row">
                    <div className={`col-md-6 ${template === 'one' && 'order-2'}`}>
                        <div className="p-4">
                            <p className="section-about_boxTitle" dangerouslySetInnerHTML={{__html: text}}>
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 np">
                        <img className="section-about_boxImg" src={img} alt="about info" aria-roledescription="about" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About;
