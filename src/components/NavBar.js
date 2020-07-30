import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <p>Rick and Morty</p>
                <ul className="center">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/maincast'>Main Characters</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar