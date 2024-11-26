import React from 'react'
import Navigation from './componnets/Navigation/Navigation'
import Home from './componnets/Home/Home'
import About from './componnets/About/About'
import Skills from './componnets/Skills/Skills'
import Services from './componnets/Services/Services'
import Contacts from './componnets/Contacts/Contacts'
import Footer from './componnets/Footer/Footer'

const App = () => {
          return (
                    <div >
                              <Navigation />
                              <Home />
                              <About />
                              <Skills />
                              <Services />
                              <Contacts />
                              <Footer />

                    </div>
          )
}

export default App
