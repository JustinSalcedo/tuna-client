import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <div className="main_navbar">
                <div className="center_logo">
                    <img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
                </div>
                <nav className="nav_links">
                    <ul>
                        <li className="active"><Link to="/templates">Templates</Link></li>
                        <li><Link to="/models">Models</Link></li>
                        <li><Link to="/sections">Sections</Link></li>
                        <li><Link to="/components">Components</Link></li>
                        <li><Link to="/styles">Styles</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
