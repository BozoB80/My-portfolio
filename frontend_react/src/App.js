import React, { useState }  from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {  
  const [theme, setTheme] = useState('dark');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }  

  return (
    <div className='app' data-theme={theme}>
      <Navbar switchTheme={switchTheme} theme={theme} />
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