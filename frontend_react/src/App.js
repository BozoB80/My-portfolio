import React from 'react'
import useLocalStorage from 'use-local-storage'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  
  const defaultDark = 'dark'
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }  

  return (
    <div className='app' data-theme={theme}>
      <Navbar switchTheme={switchTheme} />
      <Header />
      <Skills />
      <Work />
      <About />
      <Testimonial />
      <Footer />
    </div>  
  )
}

export default App