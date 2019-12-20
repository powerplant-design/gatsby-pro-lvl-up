import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const NavWrapper = styled.nav`
    width: 100%;
    color: white;
    padding: 0 2rem;
    font-family: 'Violet-Sans', Arial, Helvetica, sans-serif;
    font-size: 1.4rem;    
    ul {
        margin: 0 auto;
        display: inline-block;
        max-width: 640px;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    a {
        color: white;
        transition: opacity 300ms;
    }
    a:hover {
        opacity: 0.6;
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
            </ul>
        </NavWrapper>
    )
}

export default Nav