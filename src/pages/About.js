import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-2.jpg';
import { motion } from 'framer-motion';
import { animationTwo } from '../animations';

const About = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
      <Header />
      <Hero image={Image} title='Beautiful views' desc='Never seen before' />
      About
    </motion.div>
  );
};

export default About;
