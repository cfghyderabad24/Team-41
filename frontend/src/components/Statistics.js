import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { motion } from 'framer-motion';
import './Statistics.css';
import { TiTick } from "react-icons/ti";
import whoImage from './about.jpg'
import openImage from './open.png'
import donateImage from './donate.jpg'; // Assuming donate.png is in the same directory as this file

const Statistics = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <div className='who'>
    <img 
          src={whoImage} 
          alt="Donate Image"
          className='donate-image '
        />
    </div>
<div className='whoinfo'>
<h3>WHO WE ARE?</h3>
<h3>We are creating a better universe.</h3>
            <li>
            
              We are a group of socially responsible and concerned young people from diverse socio-economic backgrounds, working together to create a sustainable and equally accessible world for everyone.
            </li>
            Founded in 2015, we work at the intersection of Gender, Health and Climate Change, and we believe these core areas are essential to the growth of our development and social sectors.
            <li>
          
            </li>
</div>
<div div className='first'>
<div className='open'>
<img 
          src={openImage} 
          alt="Donate Image"
          className='donate-image '
        />
        <div className='whoinfo'>
<h3>WHY GENDER AND CLIMATE CHANGE?</h3>
<h3>We aim to build an alternative centre of gravity.</h3>
            <li>
          
            Climate change adversely affects everything and has profound implications for gender equality. Gender minorities are never given priority in the climate policies, and they occupy a peripheral threshold in the decision-making roles.
            </li>
            Ranging from proper sanitation to clean water, from environment friendly waste segregation to menstrual health practises, gender constitutes a vital role in the area of climate change. It becomes our necessity to be aware of these interrelations and address as well as make people aware of informative decisions regarding the same.
            <li>
          
            </li>
</div>
</div>
</div>
    <section className="statistics">
      <h1>Company Facts</h1>
      <Waypoint onEnter={() => setVisible(true)}>
        <div className="stats-container">
          <div className="stat">
            <h3>Lives Impacted</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 57000 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
              57000+
            </p>
          </div>
          <div className="stat">
            <h3>Workshops Completed</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 970 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
              970+
            </p>
          </div>
          <div className="stat">
            <h3>Partners</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 70 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
              70+
            </p>
          </div>
          <div className="stat">
            <h3>Media Features</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 45 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
              45+
            </p>
          </div>
        </div>
      </Waypoint>
      {/* Adding the figure with the donate image */}
      <div className="rounded">
        <img 
          src={donateImage} 
          alt="Donate Image"
          className='donate-image '
        />
      </div>
      <div className='donate'>
        <h3>BE AN ALLY</h3>
        <h2>We have hope if we have you.</h2>
        <div>
            <li>
              <TiTick />
              Be a good-universe ally, donate for our cause, and help us create a holistic future for each one of us based on equality and sustainability
            </li>

            <li>
              
              <TiTick />
              Volunteer with us, join our community and be a gender-equal, climate resilient ally!
            </li>
          </div>
      </div>
     
      
    </section>
    
    </>
  );
};

export default Statistics;
