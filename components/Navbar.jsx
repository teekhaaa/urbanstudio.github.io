import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  // const [isActive, setIsActive] = useState('dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img
          className="h-[200px] m-[10px] leading-[30px] object-contain"
          src="./logo.png"
          alt="Logo"
        />

        <img
          src="./menu.svg"
          onClick={toggleDrawer}
          alt="menu"
          className="w-[28px] h-[28px] object-contain lg:hidden justify-center items-center cursor-pointer self-center"
        />

        <ul className="flex text-white gap-7 justify-center items-center sm:hidden hidden md:hidden lg:flex">
          <li className="hover:text-[#00FFFF] text-white"><a href="#home">Home</a></li>
          <li className="hover:text-[#00FFFF] text-white"><a href="#services">Services</a></li>
          <li className="hover:text-[#00FFFF] text-white"><a href="#about">About</a></li>
          <li className="p-[10px] bg-[#063970] border-solid border-2 px-[20px] border-white rounded-xl"><a href="#contact"> Contact</a></li>
        </ul>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute w-full h-full bg-black opacity-25" onClick={toggleDrawer} />
          <div className="bg-white z-10 p-8 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-2xl">TheUrbanCutStudio</h2>
              <div onClick={toggleDrawer}>
                <img src="./close.svg" alt="Close" className="w-6 h-6" />
              </div>
            </div>
            <ul className="flex flex-col gap-4 text-white font-semibold">
              <li className="hover:text-[#00FFFF] text-black"><a href="#home">Home</a></li>
              <li className="hover:text-[#00FFFF] text-black"><a href="#services">Services</a></li>
              <li className="hover:text-[#00FFFF] text-black"><a href="#about">About</a></li>
              <li className="p-[10px] bg-[#063970] border-solid border-2 px-[20px] border-white rounded-xl">
                <a href="#contact"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
