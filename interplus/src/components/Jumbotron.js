import React from "react"
import { Link } from "gatsby"
import img from '../../static/blueberry-pattern.png'
const Jumbotron = () => {
  return(
    <div  id='jumbo'>
      <div className='border-b border-indigo-700  pb-20 insideJumbo' >
        {/*<img src={img} alt="img" id={"jumboImg"} />*/}
        <h1 className='pt-12 text-5xl text-indigo-600 font-bold'>Ekoloska proizvodnja borovnica <br/>i sipka</h1>
        <h4 className='text-xl text-gray-700 mt-6 mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at beatae dolorem enim error.</h4>
        <Link   to='/about'
                className="mb-10 py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
          Saznaj Vise
        </Link>
      </div>
    </div>
  )
}

export default Jumbotron

