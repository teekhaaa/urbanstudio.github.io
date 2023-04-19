'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, planetVariants} from '../utils/motion'; 
import {TitleText, TypingText} from '../components';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 min-h-full py-20`} id="home">
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount:0.25}}
    className={`{$styles.innerwidth} mx-auto lg:flex-row flex flex-col gap-8`}
    >
      
      <motion.div
      variants={fadeIn('left','tween',0.2,1)}
      className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title="| Let's Begin" />
        <TitleText title={<>Transform Your Business with Our Comprehensive Services</>} />
        
      </motion.div>
      <motion.div
      variants={planetVariants('right')}
      className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="./SOCIAL.png" alt="Ad"
        className='w-[100%] h-[100%] object-contain' />
        
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
