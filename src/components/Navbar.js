import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1>{props.title}</h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.primary_Heading}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.secondary_Heading}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" align="right" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.buttonState}</label>
          </div>  

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    primary_Heading : PropTypes.string.isRequired,
    secondary_Heading : PropTypes.string
}

Navbar.defaultProps = {
    title : "Put Title Here.",
    primary_Heading : "Put Primary Heading Here.",
    secondary_Heading : "Put Secondary Heading Here."
}