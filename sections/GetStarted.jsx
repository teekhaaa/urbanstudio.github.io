'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, planetVariants} from '../utils/motion'; 
import {StartSteps, TitleText, TypingText} from '../components';
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`} id='contact'>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once:false, amount:0.25}}
    className={`{$styles.innerwidth} mx-auto flex-col flex gap-8 justify-center items-center`}
    >
      <motion.div
      variants={planetVariants('left')}
      className={`flex-1 ${styles.flexCenter} flex-col`}
      >
        {/* <img src="/get-started.png" alt="get started"
        className='w-[90%] h-[90%] object-contain' />
      </motion.div>
      <motion.div
      variants={fadeIn('left','tween',0.2,1)}
      className='flex-[0.75] flex justify-center flex-col'
      > */}
        <TypingText title='| Contact Us' />
        <TitleText title={<>We reply in few hours</>} />
        <div className='mt-[31px] flex flex-col gap-[24px] lg:flex-row md:flex-row'>
          <div className='flex bg-white justify-between item-center p-[50px] flex-col text-black rounded-xl'>
            <h3 className={`font-semibold text-[20px] text-black mb-[30px]`}>Mobile:</h3>
            <div className='flex'>
            <div>
              <img src="./phone.svg" alt="" className='h-[48px] mr-[20px]' />
            </div>
            <div className='flex flex-col'>
            <a href='tel:+919425115731'>+91 94251 15731</a>
            <a href='tel:+916267750621'>+91 62677 50621</a>
            </div>
            </div>
          </div>
          <div className='flex bg-white justify-between item-center p-[50px] flex-col text-black rounded-xl'>
            <h3 className={`font-semibold text-[20px] text-black mb-[30px]`}>Email:</h3>
            <div className='flex'>
            <div>
              <img src="./email.svg" alt="" className='h-[48px] mr-[20px]' />
            </div>
            <div className='flex flex-col'>
            <a href='mailto:theurbancutstudioofficial@gmail.com'>theurbancutstudioofficial@gmail.com</a>
            {/* <a href='tel:+916267750621'>+91 62677 50621</a> */}
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
