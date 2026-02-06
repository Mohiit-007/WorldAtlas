import React from 'react'
import {FaLongArrowAltRight}  from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import About from './About'

const Home = () => {
  return (
     <>
     <main className="hero-section">
  <div className="container hero-grid">
    <div className="hero-content">
      <h1 className="hero-title">
        Explore the World,<br />One Country at a Time.
      </h1>

      <p className="hero-text">
        Discover the history, culture, and beauty of every nation.
        Sort, search, and filter through countries to find the details you need.
      </p>

      <NavLink to="/country">
        <button className="hero-btn">
          Start Exploring <FaLongArrowAltRight />
        </button>
      </NavLink>
    </div>

    <div className="hero-image">
      <img src="/world.png" alt="World landmarks" />
    </div>
  </div>
  </main>

    <About/>
     </>
  )
}

export default Home