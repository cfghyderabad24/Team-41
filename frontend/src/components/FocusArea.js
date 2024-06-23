import React from 'react';
import { motion } from 'framer-motion';
import './FocusArea.css';

const FocusAreas = () => (
  <section className="focus-areas">
    <motion.div
      className="focus-area"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Climate Change</h2>
      <p>Encourage rethinking consumption and redesigning a sustainable society.</p>
      <button className="learn-more">Learn More</button>
    </motion.div>
    <motion.div
      className="focus-area"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2>Health & Well-Being</h2>
      <p>Create awareness and provide services for marginalized communities.</p>
      <button className="learn-more">Learn More</button>
    </motion.div>
    <motion.div
      className="focus-area"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2>Gender Equality</h2>
      <p>Promote gender and social equality as key to sustainability.</p>
      <button className="learn-more">Learn More</button>
    </motion.div>
  </section>
);
export default FocusAreas;