'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion'; 
import {TitleText, TypingText} from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView='show'
  viewport={{once:false, amount:0.25}}
  className={`{$styles.innerwidth} mx-auto flex flex-col`}
  >
    <TypingText title='| What we are?' textStyles='text-center' />
    <TitleText title={<>We are <span className='text-[#00FFFF] text-[30px]'>TheUrbanCutStudio</span></>} textStyles='text-center' />
    <motion.div
    variants={fadeIn('up', 'tween', 0.3, 1)}
    className='relative mt-[68px] flex w-full h-[550px]'>
      <p className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>We are a one-stop agency providing comprehensive solutions to all your digital needs. From video editing and graphic designing to 360-degree YouTube management and web development, we have got you covered. Our team of experts is dedicated to delivering top-notch services that cater to your specific requirements. Whether you are a small business owner or a large corporation, we have the expertise to help you achieve your goals and succeed in the digital world. So, if you are looking for reliable and efficient digital solutions, look no further than our agency.
</p>
    </motion.div>
  </motion.div>
  </section>
);

export default World;
