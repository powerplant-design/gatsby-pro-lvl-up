import React from 'react'
import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: absolute;
  background-color: #1c1c1c;
  color: whitesmoke;
  bottom: 0;
  left: 0;
  height: 30px;
  font-size: 0.8rem;
  font-family: monospace;
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    display: inline-block;
    opacity:0.8;
  }
      & a:hover {
      opacity: 1;
      }
`
const Footer = () => {
    return (
        <FooterWrapper>
          <div>
        © {new Date().getFullYear()}, Built by <a href="https://www.rzzldzzl.design" target="_blank" rel="noopener noreferrer">RZZLDZZL.DESIGN</a>
        {` with `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">GATSBY</a>
          </div>
      </FooterWrapper>
    )
}

export default Footer
