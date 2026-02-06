import React from 'react'
import countrydata from '../countrydata.json'

const About = () => {
  return (
     <section className="section-about container">
      <h5 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h5>

      <div className="gradient-cards">
        {countrydata.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default About