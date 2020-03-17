import React from 'react'
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
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
                <li><AniLink fade to="/" duration={1}>HOME</AniLink></li>
                <li><AniLink fade to="/about" duration={1}>ABOUT</AniLink></li>
                <li><AniLink fade to="/gallery" duration={1}>GALLERY</AniLink></li>
                <li><AniLink fade to="/services" duration={1}>SERVICES</AniLink></li>
            </ul>
        </NavWrapper>
    )
}

export default Nav