import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [activeLink, setActiveLink] = useState('TEMPLATES')

    return (
        <>
            <div className="main_navbar">
                <div className="center_logo">
                    <img src="../../images/lifether_rhombus.png" alt="Welcome, Tunner..." />
                </div>
                <nav className="nav_links">
                    <ul>
                        <li className={(activeLink === 'TEMPLATES') ? "active" : ""} 
                        onClick={() => setActiveLink('TEMPLATES')} ><Link to="/templates">Templates</Link>
                        </li>
                        <li className={(activeLink === 'MODELS') ? "active" : ""} 
                        onClick={() => setActiveLink('MODELS')} ><Link to="/models">Models</Link>
                        </li>
                        <li className={(activeLink === 'SECTIONS') ? "active" : ""} 
                        onClick={() => setActiveLink('SECTIONS')} ><Link to="/sections">Sections</Link>
                        </li>
                        <li className={(activeLink === 'COMPONENTS') ? "active" : ""} 
                        onClick={() => setActiveLink('COMPONENTS')} ><Link to="/components">Components</Link>
                        </li>
                        <li className={(activeLink === 'STYLES') ? "active" : ""} 
                        onClick={() => setActiveLink('STYLES')} ><Link to="/styles/layouts">Styles</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
