import React from 'react'
import { Link } from "gatsby"

const Nav = () => {
    return (
        <div style={{
            padding: `0 2rem`
        }}>
            <ul style={{
                listStyle: `none`,
                display: `flex`,
                justifyContent: `space-between`,
                color: `white`
        }}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
            </ul>
        </div>
    )
}

export default Nav