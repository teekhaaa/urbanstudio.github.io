'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer} from '../utils/motion'; 
import { TitleText, TypingText} from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView='show'
  viewport={{once:false, amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
    <TypingText title='| Work ' textStyles='text-center'/>
    <TitleText title={<>Our Expertise</>} textStyles='text-center' />
      <div className={`${styles.yPaddings} flex`}>
        <ul className='flex gap-10 flex-wrap'>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Graphic Designing</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Wedding Invites</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>LogoDesign</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>V.F.X.</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>2D Animation</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>3D Animation</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>3D Models</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Composition</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Package Design</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Video Editing</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Digital Marketing</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Socail Media Marketing</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>UI/UX Design</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Video Animation</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>Wedding Video Editing</li>
          <li className='text-[#117ADC] gap-14 bg-[#D4DAE1] font-semibold p-[25px] px-[60px] text-[22px] rounded-2xl'>App Development</li>
          

        </ul>
      </div>
  </motion.div>
  </section>
);

export default Insights;
