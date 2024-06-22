import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { motion } from 'framer-motion';
import './SupportUs.css';

const SupportUs = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section id="support-us" className="support-us">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Support Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join us in making a difference. Your support helps us continue our mission to create a more livable, safer, and more accessible world for all genders and prioritize community health.
      </motion.p>
      <Waypoint onEnter={() => setVisible(true)}>
        <div className="stats-container">
          <div className="stat">
            <h3>Lives Impacted</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 100000 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
            </p>
          </div>
          <div className="stat">
            <h3>Indirect Lives</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 200000 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
            </p>
          </div>
          <div className="stat">
            <h3>Projects Completed</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 500 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
            </p>
          </div>
        </div>
      </Waypoint>
      <motion.button
        className="donate-button"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Donate
      </motion.button>
    </section>
  );
};

export default SupportUs;