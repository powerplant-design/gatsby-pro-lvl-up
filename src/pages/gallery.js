import React from 'react'
import { graphql, useStaticQuery} from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"
// import { Link } from 'gatsby'

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: {eq: "hero.jpg"}) {
    id
    childImageSharp {
      fixed {
        src
        srcSet
      }
      fluid {
        src
        srcSet
      }
    }
  }
        }
    
    `)
console.log(data);


    return (
        <Layout>
            <SEO title="Gallery: working with Gatsby Image" />
            <div>
                <h2>GALLERY</h2>
                
            </div>
        </Layout>
    )
}

export default Gallery
