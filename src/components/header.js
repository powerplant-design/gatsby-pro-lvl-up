import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
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
        <Link to="/">
          <img src={logo} alt={siteTitle}/>
        </Link>
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
