import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getcarddata } from './Api'
import Loading from '../src/Loading'
import { NavLink } from 'react-router-dom'
import Country from './Country'

const Carddetails = () => {
    const params = useParams()
    const [value,setValue] = useState(null)
    const [isPending, startTransition] = useTransition()
      useEffect(() => {
          startTransition(async () => {
            const res = await getcarddata(params.id)
        if(res.status === 200 ){
           return setValue(res.data[0])
        }
          })
        }, [])

      console.log(params)
    if (isPending) return <Loading/>;
    console.log(value)
  return (
       <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {value && (
          <div className="country-image grid grid-two-cols">
            <img
              src={value.flags.svg}
              alt={value.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {value.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(value.name.nativeName)
                    .map((key) => value.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {value.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {value.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {value.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {value.capital[0]}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {value.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(value.currencies)
                    .map((curElem) => value.currencies[curElem].name)}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(value.languages)
                    .map((key) => value.languages[key])
                    .join(" , ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Carddetails