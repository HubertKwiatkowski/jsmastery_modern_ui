import React from 'react'

import { Brand, CTA, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'

export const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App