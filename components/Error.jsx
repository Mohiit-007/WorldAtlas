import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}
       <NavLink to="/">
        <button> Go Home </button>
      </NavLink>
    </div>
  )
}

export default Error