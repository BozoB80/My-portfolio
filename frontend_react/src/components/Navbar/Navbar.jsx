import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { images } from '../../constants';
import './Navbar.scss';


const Navbar = ({switchTheme}) => {
  const [toggle, setToggle] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={isDarkMode ? images.bblogo2 : images.bblogo1} alt="logo" />
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
      
      <button class='button_switch' onClick={switchTheme}>
        <DarkModeSwitch 
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
      </button>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;