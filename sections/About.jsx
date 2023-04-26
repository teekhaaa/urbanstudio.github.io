'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion'; 

const About = () => (
  <section className={`${styles.paddings} relative z-10 min-h-[100vh] items-center justify center`} id="about">
    <div className="gardient-02 z-0" />
    <motion.div 
    variants={staggerContainer} 
    initial="hidden" 
    whileInView="show" 
    viewport={{once: false, amount: 0.25}} 
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
    <TypingText title="| About Us" textstyles="text-center" />
    <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
    className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
     Welcome to Urban Studio, We are a smma agency that specializes in helping
businesses grow their online presence. Our team of experts provides a range of
services including website design, social media management, video editing , content
creation and many more. We take a data-driven approach to every project, ensuring our
clients achieve measurable results. Contact us today to learn more about how we can
help your business succeed online.
    </motion.p>
    <motion.img variants={fadeIn('up','tween',0.3, 1)} src="/arrow-down.svg" className='w-[18px] h-[28px] object-contain mt-[28px]'>

    </motion.img>
    </motion.div>
  </section>
);

export default About;
