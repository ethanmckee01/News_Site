import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
            <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/away">Away</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Third">Third</Link>
            </li>
          </ul>
        </div>
      </nav>
      
    )
}

export default Nav