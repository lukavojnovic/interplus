import React from "react"
import Layout from "../components/HeaderFooterLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  // console.log(data.markdownRemark.frontmatter)
  const { html } = data.markdownRemark
  const { title, featuredImg } = data.markdownRemark.frontmatter
  const image = getImage(featuredImg)
  console.log(image)
  return (
    <Layout>
      <div className=''>

        <h2 className='text-2xl text-indigo-700  py-5'>{title}</h2>
        <div className=''>
          <GatsbyImage image={image} alt="imh" />
        </div>
        <div
          className='pt-5 text-justify'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query templateQuery($slug:String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      slug
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`
