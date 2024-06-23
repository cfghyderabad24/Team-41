import React from 'react';

import './home.css'

function Home() {
  return (
    <>

    
      <div className='box1'>
        <div className='image'>
          <img src='https://gooduniverse.org/assets/img/gu/about.png'></img>
        </div>
        <div className='content'>
          <h4>WHO WE ARE?</h4>
          <h1>We are creating a better universe.</h1>
          <div>
            <p>We are a group of socially responsible and concerned young people from diverse socio-economic backgrounds, working together to create a sustainable and equally accessible world for everyone.</p>
            <p>Founded in 2015, we work at the intersection of Gender, Health and Climate Change, and we believe these core areas are essential to the growth of our development and social sectors.</p>
          </div>
        </div>
      </div>
      <div className='box2'>
        <div className='left'>
          <h4>What we do?</h4>
          <h2>We are functionally <br></br>
            oriented towards 9 SDGs.</h2>
          <img src="https://gooduniverse.org/assets/img/gu/sdgs.png"></img>
          <p>Engaging with different communities, government institutions, organisations, and corporations, we focus on various issues ranging from sanitation and waste management to sexual reproductive and mental health practices.

          </p>
        </div>
        <div className='right'>

          <img src='https://gooduniverse.org/assets/img/gu/about2.png'></img>


        </div>


      </div>
      <div className='box3'>
        <div className='right'>
          <img src="https://gooduniverse.org/assets/img/gu/about3.png"></img>
        </div>
        <div className='left'>
          <h3>WHY GENDER AND CLIMATE CHANGE?</h3>
          <h1>We aim to build an <br></br>
            alternative centre of <br></br>
            gravity.</h1>
          <div>
            <p>Climate change adversely affects everything and has profound implications for gender equality. Gender minorities are never given priority in the climate policies, and they occupy a peripheral threshold in the decision-making roles.</p>
            <p>Ranging from proper sanitation to clean water, from environment friendly waste segregation to menstrual health practises, gender constitutes a vital role in the area of climate change. It becomes our necessity to be aware of these interrelations and address as well as make people aware of informative decisions regarding the same.</p>
          </div>
        </div>

      </div>
    </>
  );
}
export default Home;