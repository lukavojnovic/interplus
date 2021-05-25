import React from "react"
import {  Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Card (props) {

  const image = getImage(props.image)
  return(
    <div className='mt-6'>
      <p className='text-2xl text-indigo-700 pb-5'>{props.title}</p>
      <div className={`block ${props.title === "Borovnica" ? "" : "md:flex-row-reverse"} md:flex  w-full`}>
          <div className={`md:w-2/3 ${props.title === "Borovnica" ? "md:pr-10 " : "md:pl-10"} `}>
            <p className='text-md text-justify leading-relaxed'>{props.desc}</p>
            <Link to={`/${props.title.toLowerCase()}`} type="button"
                  className="mt-6 py-2 px-4 mb-3 md:mb-0 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ">
              Saznaj Vise
            </Link>
          </div>
          <div className='md:w-1/3 '>
            <GatsbyImage className='rounded-md shadow-md' alt={"image"} image={image}/>
          </div>
        </div>
    </div>
  )
}
