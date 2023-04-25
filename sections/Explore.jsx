'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer} from '../utils/motion'; 
import {ExploreCard, TitleText, TypingText} from '../components';
import {exploreWorlds} from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return(

  <section className={`${styles.paddings}`} id='services'>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Our Services' textStyles='text-center' />
      <TitleText title={<>Unlock Your Potential with Our <br className='md:block hidden'/>Professional Services</>}textStyles='text-center' />
      <div className={`mt-[50px] flex min-h-[70vh] gap-5 w-[100%] ${styles.innerWidth} justify-center items-center mx-auto flex-wrap`}>
        <div className='min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px]  bg-white flex justify-center items-center flex-col relative rounded-xl'>
          <img src="/vector1.png" className='h-[400px]' alt="" />
          <h3 className="font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8">Graphic Designing</h3>
          <p>Our graphic designing services enhance your brand's visual identity, boosting your social presence.</p>
        </div>
        <div className='min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px]  bg-white flex justify-center items-center flex-col relative rounded-xl'>
          <img src="/YOUTUBE.png" className='h-[400px]' alt="" />
          <h3 className="font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8">Video Editing</h3>
          <p>Our video editing services can boost your social media presence by creating engaging and professional content that stands out to your audience.</p>
        </div>
        <div className='min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px]  bg-white flex justify-center items-center flex-col relative rounded-xl'>
          <img src="./vector2.png" className='h-[400px]' alt="" />
          <h3 className="font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8">360 degree youtube management</h3>
          <p>With our YouTube management services, we can help you optimize your channel, create engaging content, and reach a wider audience. By doing so, we can boost your social presence and increase your visibility on the platform.</p>
        </div>
        <div className='min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px]  bg-white flex justify-center items-center flex-col relative rounded-xl'>
          <img src="/vector4.png" className='h-[400px]' alt="" />
          <h3 className="font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8">Social Media Management</h3>
          <p>Unleash Your Social Media Power: Elevate Your Online Presence, Build Loyal Connections, and Amplify Engagement!</p>
        </div>
        <div className='min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px]  bg-white flex justify-center items-center flex-col relative rounded-xl'>
          <img src="/vector3.png" className='h-[400px]' alt="" />
          <h3 className="font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8">Web Development</h3>
          <p>Empower your online presence with our expert web development services and elevate your brand to new heights</p>
        </div>
        <div className='min-h-[200px] p-[35px] mx-[50px] min-w-[300px] max-w-[400px]  bg-white flex justify-center items-center flex-col relative rounded-xl'>
          <img src="/vector2.png" className='h-[400px]' alt="" />
          <h3 className="font-semibold self-center w-[100%] m-[auto] sm:text-[26px] text-[18px] text-black z-0 self-end mb-8">Digital Marketing</h3>
          <p>Our digital marketing services employ proven strategies to increase your brand's visibility and engagement on social media platforms. This, in turn, will boost your social presence and grow your audience.</p>
        </div>
      </div>
    </motion.div>
  </section>
)};

export default Explore;
