import React, { useState, useEffect, createRef } from 'react';
import '../Home/Home.css';
import StrangeShard from './StrangeShard';
import Slider from '../../components/Slider/Slider';
import Devices from '../../components/Devices/Devices';
import Map from "../../components/Map/Map"
import Testimonial from '../../components/Testimonial/Testimonial';
import Reach from '../../components/Reach/Reach';
import FloatingIcons from '../../components/FloatingIcons/FloatingIcons';


const Home = (props) => {
  const kingEl = createRef();
  const [sizeClass, setSizeClass] = useState(2);
  const [shardCount, setShardCount] = useState(Math.floor(100 + Math.random() * 20));
  const [width, setWidth] = useState(0);
  const [portalWidth, setPortalWidth] = useState(0);

  const setShards = () => {
    setShardCount(Math.floor(50 * sizeClass + Math.random() * 20));
    setWidth(sizeClass === 2 ? 195 : 240);
    setPortalWidth(sizeClass === 2 ? 37 : 50);
  };

  const getSizeClass = () => {
    if (window.innerWidth > 800 && sizeClass !== 2) {
      setSizeClass(2);
      setShards();
    } else if (window.innerWidth > 400 && sizeClass !== 1) {
      setSizeClass(1);
      setShards();
    } else if (sizeClass !== 0) {
      setSizeClass(0);
      setShards();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', getSizeClass);
    getSizeClass();
    setShards();
  }, []);

  return (
    <>
    
      <div>
        {shardCount > 0 ? (
          [...Array(shardCount)].map((count, idx) => (
            <StrangeShard key={idx} width={width} portalWidth={portalWidth} />
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="landing-page">
        <div className="landing-circle-parent">
          <img className="landing-circle" src="images/lander-circle-final.png" alt="" />
        </div>

        <div className="throne">
          <img className="throne-img" src="/images/throne-img.png" alt="" />
        </div>
        <div className="title-wrapper">
          <h1 className="title display-4">Gamer's Burnout</h1>
        </div>
      </div>

      <section className="col">
        <div className="heading-wrapper">
          <h3>Games</h3>
        </div>
      </section>

      <section className="games">
        <Slider />
      </section>

      <section className="devices">
        <Devices />
      </section>

      <section className="col">
        <div className="heading-wrapper">
          <h3>REACH</h3>
        </div>
      </section>

      <section>
        <Reach/>
      </section>

      <section className="col">
        <div className="heading-wrapper">
          <h3>TESTIMONIALS</h3>
        </div>
      </section>
      
      <section className='gb-testimonial'>
      <Testimonial/>
      </section>
    
      <section className="col">
        <div className="heading-wrapper">
          <h3>Locate Us</h3>
        </div>
      </section>


    <section className='navigationMap'>
<Map/>
    </section>
    <section>
    <FloatingIcons/>
    </section>
    </>
  );
};

export default Home;
