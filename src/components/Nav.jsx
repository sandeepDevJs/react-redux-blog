import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container"><NavLink id="logo-container" to="/" className="brand-logo">Blog</NavLink>

                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">About Us</NavLink></li>
                </ul>

                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Services</NavLink></li>
                </ul>

                <ul id="nav-mobile" className="sidenav">
                    <li><NavLink to="/">Login</NavLink></li>
                </ul>

                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            <a href="#!" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    )
}
