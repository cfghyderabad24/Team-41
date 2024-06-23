import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import './about.css'

function About() {

  useEffect(() => {
    const handleScroll = () => {
      const imgContent = document.querySelector('.imgcontent');
      const box3 = document.querySelector('.box3');
      
      const imgContentPosition = imgContent.getBoundingClientRect().top;
      const box3Position = box3.getBoundingClientRect().top;
      
      const screenPosition = window.innerHeight / 1.3;
      
      if (imgContentPosition < screenPosition) {
        imgContent.classList.add('show');
      }
      if (box3Position < screenPosition) {
        box3.classList.add('show');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="ab1">
        <h1>Good Universe integrates</h1>
        <h3>
          Gender Equality, Good Health and Climate-Friendly Communities
          <br></br>
          while focusing on equitable ways to build a <br></br>
          sustainable, regenerative, and resilient future.
        </h3>
      </div>
   
      <div className="imgcontent">
        <div className="we">
          <h2>Who Are We?</h2>
          <p>
            We are a group individuals who have gathered to address the fallouts
            of climate change, gender inequalities and detrimental health
            practices that exist in our urban and rural communities, by engaging
            different social strata in a comprehensive manner.
          </p>
          <p>
            To problematize our focus areas and engage with them holistically, we
            work with a participatory and collaborative approach through
            action-driven goals that include
          </p>
          <ul>
            <div>
              <li>
                <TiTick />
                Periodic Awareness Campaigns.
              </li>

            <li>
              
              <TiTick />
              Intensive Training Programs.
            </li>
          </div>
          <div>
            <li>
              
              <TiTick />
              Stakeholders’Conversation.
            </li>
            <li>
              
              <TiTick />
              Capacity Building.
            </li>
          </div>
        </ul>
      </div>
      <div className="imagea">
        <img src="https://gooduniverse.org/assets/img/gu/about5-2x.png"></img>
      </div>

      </div>
      <div className="ab3">
        <div  className="im3">
        <img src="https://gooduniverse.org/assets/img/gu/about6.png"></img>
        </div>
        
        <h3>
          We envision a world that comprises <br></br>
           gender equality, sustainable
          adaptation,
          <br></br> and responsible health care practices.
        </h3>
        <p>We are a group of like-minded individuals who gather to address the fallouts of climate change, gender inequalities and detrimental health <br></br>
           practices that exist in our urban and rural communities, by engaging different social strata in a comprehensive manner.</p>
        <p>We take every individual act as a collaborative means to create a collective that stands together to eradicate social inequalities and  <br></br>
          existing detrimental practices that affect our climate, families/communities, and bodies.</p>
        <p>We strongly and efficiently support and encourage our individuals and communities to take informed decisions that will benefit their lives <br></br>
           and create a holistic society where everyone is treated equally with respect, care, and effort</p>
        <p>We believe that the vulnerable communities would continue to suffer in existent conditions as a muted population if their foundational <br></br>
           concerns aren’t addressed keeping their struggles for basics at the forefront.</p>
        <p>For a sustainable and all-pervasive ecosystem of support, we at Good Universe pledge to counter the conditions plagued by indifferent <br></br>
          policy-making and situational non-interventions.</p>
      </div>
    </>
  );
}

export default About;
