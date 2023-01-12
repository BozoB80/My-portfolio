import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { images } from '../../constants'

import './Header.scss'
import { fadeIn } from '../../utils/motion'

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
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, my name is</p>
              <h1 className='head-text'>Božo Bakula</h1>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className='tag-cmp app__flex'>
            <p className='p-text'>Front-end Developer</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 1)}
        initial="hidden"
        whileInView="show"
        className='app__intro-badge'
      >
          <motion.ul
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="badge-cmp2 about-text">
            {['As a Junior Frontend Developer with a year of experience under my belt, I have had the opportunity to work on a variety of projects, including a gym project and a project called Nekros which focused on obituary management.',            
            'I have honed my skills in React.js, Next.js, JavaScript, and Tailwind, as well as gained experience working with Framer Motion.',
            'Eager to continue learning and expanding my skills, I am excited to bring my passion and dedication to my next role. Always ready to take on new challenges and thrive in dynamic environments.',
            'Committed to staying up-to-date with the latest frontend technologies and industry trends, and I am always looking for new and innovative ways to improve my skills and deliver high-quality work.'
            ].map((sentence, i) => (
              <motion.li
                key={i}
                variants={fadeIn('left', 'spring', i * 0.6, 1)}
              >
                {sentence}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeIn('left', 'spring', 2.4, 1)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="badge-cmp3 about-text"
          >
            I created this portfolio website with React, SCSS, Framer Motion and Sanity backend in order to showcase some of my skills. 
            <br />
            I deploy all my work on Netlify or Vercel sites.
          </motion.p>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.tailwind, images.javascript, images.react, images.next, images.framer].map((circle, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='circle-cmp app__flex' 
            key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
