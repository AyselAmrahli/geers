import React from 'react';

import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Percent from './components/Percent';
import About from './components/About';

import AboutImg from './assets/img/about.png';
import AboutImg2 from './assets/img/about2.png';
import Garantie from './components/Garantie';
import Footer from './components/Footer';

function App() {

const aboutText = `convallis a cras semper auctor neque vitae tempus quam 
pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis 
cras sed felis eget velit <br/><br/> aliquet sagittis id consectetur purus ut faucibus 
pulvinar elementum integer enim neque volutpat ac iaculis eu non diam phasellus 
vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor 
urna nunc id cursus metus aliquam<br/><br/> eleifend mi in nulla posuere sollicitudin aliquam 
ultrices sagittis orci a scelerisque purus semper ac ut consequat semper viverra nam 
libero justo laoreet sit amet cursus`;

const AboutData = [
  {
      title: '97%',
      desc: 'senectus et netus et malesuada',
  },
  {
      title: '95%',
      desc: 'ullamcorper malesuada proin libero nunc consequat',
  },
  {
      title: '66%',
      desc: 'urna duis convallis convallis tellus id interdum',
  },
  {
      title: '61%',
      desc: 'urna duis convallis convallis tellus id interdum',
  },
  {
      title: '56%',
      desc: 'senectus et netus et malesuada',
  }
]


const garantieList = [
  {
    content: 'fermentum dui faucibus in ornare quam viverra orci sagittis'
  },
  {
    content: 'consequat ac felis donec et odio pellentesque diam',
  },
  {
    content: 'ultrices gravida dictum fusce ut placerat orci'
  }
]

  return (
    <div className="App">
      <Header />
      <Hero />

      <Percent data={AboutData} />

      <About img={AboutImg} text={aboutText} template='one' />
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <button className="btn btn-theme w-100">at consectetur lorem</button>
            </div>
          </div>
        </div>
      <About img={AboutImg2} text={aboutText} />

      <Garantie list={garantieList} />

      <Footer />
    </div>
  );
}

export default App;
