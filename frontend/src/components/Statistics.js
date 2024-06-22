import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { motion } from 'framer-motion';
import './Statistics.css';

const Statistics = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="statistics">
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
            <h3>Workshops Completed</h3>
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
          <div className="stat">
            <h3>Partners</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 50 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
            </p>
          </div>
          <div className="stat">
            <h3>Media Features</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 30 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
            </p>
          </div>
          <div className="stat">
            <h3>Awards</h3>
            <p>
              <motion.span
                initial={{ count: 0 }}
                animate={{ count: visible ? 20 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {({ count }) => Math.floor(count)}
              </motion.span>
            </p>
          </div>
        </div>
      </Waypoint>
    </section>
  );
};

export default Statistics;