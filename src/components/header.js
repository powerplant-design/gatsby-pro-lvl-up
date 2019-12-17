import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"

import logo from "../images/wigclub-logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `coral`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt={siteTitle}/>
          {/* {siteTitle} */}
        </Link>
      </h1>
    </div>
    <Nav></Nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
