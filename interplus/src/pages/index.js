import React from "react"
import HeaderFooterLayout from "../components/HeaderFooterLayout"
import { getImage } from "gatsby-plugin-image"
import Jumbotron from "../components/Jumbotron"
import cd from "../data/data.json"
import Card from "../components/Card"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <HeaderFooterLayout>
      <Jumbotron />
      <p className='text-4xl text-indigo-600 font-bold mt-6 text-center'>Sto uzgajamo</p>
      {cd.cardArray.map((item, index) => {
        return(
            <Card name={item.name} title={item.title} desc={item.desc} image={data.allFile.nodes[index]}/>
          )
      })}

    </HeaderFooterLayout>
  )
}
  export const query = graphql`
  query cardQuery {
      file(relativePath: {eq: "home-banner.jpg"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      allFile(
        filter: {relativeDirectory: {eq: "card-images"}}
        sort: {fields: relativePath}
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
`