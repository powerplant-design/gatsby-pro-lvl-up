// import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import TransitionLink from 'gatsby-plugin-transition-link'
// import AniLink from "gatsby-plugin-transition-link/AniLink";

import Nav from "./nav"
import logo from "../images/wigclub-logo.png"

import styled from "styled-components"

// ?DEFINE STYLES FOR HEADER COMPONENET v
const HeaderWrapper = styled.header`
  // JUST WRITE NORMAL CSS
  background: orange;
  margin-bottom: 1.45rem;
  `
  const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 1rem 0 0 0;
    img {
      max-width: 400px;
    }
  }
  `;

const Header = ({ siteTitle }) => (
  // ?INSERT HEADER COMPONENT v
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <TransitionLink to="/" 
        exit={{
          length: 0.5
        }}
        entry={{
          length: 2
        }}>
          <img src={logo} alt={siteTitle}/>
        </TransitionLink>
      </h1>
    </HeaderContainer>
    <Nav></Nav> {/* TO NAV COMPONENT */}
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
