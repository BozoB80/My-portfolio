import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../utils/motion';
import MaterialUISwitch from '../Switch/Switch';
import { Menu, Close } from '@mui/icons-material';

import { images } from '../../constants';
import './Navbar.scss';


const Navbar = ({switchTheme, theme}) => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="app__navbar">
      <div  className="app__navbar-logo">
        <a href="#home">
          <img src={theme === 'dark' ? images.bblogo2 : images.bblogo1} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {['home', 'skills', 'work', 'about', 'contact'].map((item) => (
          <motion.li 
            className="app__flex p-text" 
            key={`link-${item}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </ul>
      
      <MaterialUISwitch 
        onChange={switchTheme}
      />

      <div className="app__navbar-menu">
        {!toggle && (
          <Menu onClick={() => setToggle(true)} />
        )}

        {toggle && (
          <>
          <Close onClick={() => setToggle(false)} />
          <motion.div
            variants={slideIn('up', 'spring', 0, 2)}
            initial="hidden"
            whileInView="show"
          >
            
            <ul>
                {['home', 'skills', 'work', 'about', 'contact'].map((item, i) => (
                  <motion.li key={item}
                    variants={fadeIn('left', 'spring', i * 0.5, 0.7)}
                    initial="hidden"
                    whileInView="show"
                  >
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </motion.li>
                ))}
            </ul>
          </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;