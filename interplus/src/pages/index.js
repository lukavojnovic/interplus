import React from "react"
import HeaderFooterLayout from "../components/HeaderFooterLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function Home({data}) {
  const image = getImage(data.file)
  return (
    <HeaderFooterLayout>
      <div className="h-screen">
        <div className='max-w-lg'>
          <GatsbyImage alt={'asd'} image={image}/>
        </div>
      </div>
    </HeaderFooterLayout>
  )
}

export const query = graphql`
query homeBanner {
  file(relativePath: {eq: "home-banner.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        placeholder: BLURRED
      )
    }
  }
}
`