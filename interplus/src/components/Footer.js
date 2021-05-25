import React from "react"
import { Link } from "gatsby"
import {FaPhone, FaEnvelope} from "react-icons/all"

export default function Footer() {
  return (
    <div className='w-full bg-indigo-700 text-center py-5 mt-6'>
      <div className='flex justify-center items-center'>
        <FaPhone className="text-gray-50 hover:text-blue-100 mr-2"/>
        <p className="text-gray-50 hover:text-blue-100 cursor-default" >+385 91 6650 234</p>
      </div>
      <div className='flex justify-center items-center mb-6'>
        <FaEnvelope className="text-gray-50 hover:text-blue-100 mr-2"/>
        <p className="text-gray-50 hover:text-blue-100 cursor-default" >ekoborovnice@gmail.com</p>
      </div>
      <div className='flex justify-center items-center mb-6'>
        <Link className="text-gray-50 hover:text-blue-100" to='/contact'>Kontaktirajte nas</Link>
      </div>
      <div className=" flex justify-center items-center">
        <p className="text-gray-400 font-thin">&copy; All rights reserved Inter Plus d.o.o</p>
      </div>
    </div>

  )
}
