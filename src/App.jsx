import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About'
import Work from './components/work/Work'
import Dishes from './components/dishes/Dishes'
import CHefs from './components/chefs/CHefs'
import Recipes from './components/recipes/Recipes'
import Social from './components/social/Social'

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <hr/>
        <Home />
        <About />
        <Work />
        <Dishes />
        <CHefs />
        <Recipes />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App
