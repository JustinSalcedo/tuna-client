import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SubHeader = ({ match }) => {
    const [activeLink, setActiveLink] = useState('LAYOUTS')

    return (
        <div className="styles_navbar">
            <nav className="nav_links sub-nav">
                <ul>
                    <li className={(activeLink === 'LAYOUTS') ? "active" : ""} 
                        onClick={() => setActiveLink('LAYOUTS')} ><Link to={match.url + "/layouts"}>Layouts</Link>
                    </li>
                    <li className={(activeLink === 'COLORS') ? "active" : ""} 
                        onClick={() => setActiveLink('COLORS')} ><Link to={match.url + "/colors"}>Color palettes</Link>
                    </li>
                    <li className={(activeLink === 'FONTS') ? "active" : ""} 
                        onClick={() => setActiveLink('FONTS')} ><Link to={match.url + "/fonts"}>Font pairings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
