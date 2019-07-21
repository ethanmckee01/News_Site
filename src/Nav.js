import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <NavLink className="nav-link bg" exact to="/">Headlines</NavLink>
            <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link bg" to="/away">Search</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link bg" to="/Third">Weather</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
    )
}

export default Nav