import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Božo Bakula</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Front-end Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
          <div className="about-text">As a junior frontend developer with 1 year of experience, I have worked on two projects - a gym project and an obituary project called Nekros. My best skills include React.js, Next.js, JavaScript, and Tailwind, as well as experience with Framer Motion. I am always willing to learn new skills and accept challenges, and am excited to bring my passion and dedication to my next role.</div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.tailwind, images.javascript, images.react, images.next, images.framer].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
