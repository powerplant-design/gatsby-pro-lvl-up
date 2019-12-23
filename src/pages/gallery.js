import React from 'react'
import { graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import Layout from '../components/layout'
import SEO from "../components/seo"
// import { Link } from 'gatsby'

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
              nodes{
                id
                childImageSharp {
                  fixed(
                    width:200, height: 200
                    ) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }

            image: file(relativePath: {eq: "hero.jpg"}) {
            id
            childImageSharp {
              fixed(
                width:600
                ) {
                ...GatsbyImageSharpFixed
              }
              fluid {
                ...GatsbyImageSharpFluid 
              }
            }
          }
        }
    
    `)
    console.log(data);


    return (
        <Layout>
            <SEO title="Gallery: working with Gatsby Image"/>
            <div>
              <h2>GALLERY</h2>
              <Img fixed={data.image.childImageSharp.fixed}  alt="Pink hero image fixed"/>
              <Img fluid={data.image.childImageSharp.fluid}  alt="Pink hero image fluid"/>
              <div className="gallery" style={{display: `flex`, justifyContent: `space-between`, flexWrap: `wrap`}}>
                {data.images.nodes.map( image => (
                  <Img key={image.id} fixed={image.childImageSharp.fixed} />
                ))}
              </div>
            </div>
        </Layout>
    )
}

export default Gallery
