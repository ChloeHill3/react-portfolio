import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Project from './components/projects/Projects';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Project />
      <Footer />
    </>
  )
}

export default App