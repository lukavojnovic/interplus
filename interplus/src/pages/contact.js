import React from "react"
import HeaderFooterLayout from "../components/HeaderFooterLayout"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <HeaderFooterLayout>
      <div>
        <div className="border-b border-indigo-700 pb-5 mb-5">
          <h1 className="pt-12 text-5xl text-indigo-600 font-bold mb-3">Kontaktirajte nas!</h1>
          <h3>Ispunite formu i posljite nam poruku</h3>
        </div>
        <div className='block md:flex justify-between'>
          <div className="mr-0 md:mr-3 md:w-1/2 w-full mt-6 border border-gray-50 px-5 my-3 shadow-md rounded-xl">
            <h3 className="font-normal mt-6 mb-2 text-indigo-600">Kontakt forma</h3>
            <div className='mt-4'>
              <label htmlFor="required-email" className="text-gray-700">
                Email
              </label>
              <input type="text" id="required-email"
                     className="mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                     name="email" placeholder="Email" />
            </div>
            <div className='mt-4'>
              <label htmlFor="required-email" className="text-gray-700">
                Ime i prezime
              </label>
              <input type="text" id="required-email"
                     className="mt-1  rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                     name="email" placeholder="Ime i prezime" />
            </div>
            <div className='mt-4'>
              <label htmlFor="required-email" className="text-gray-700">
                Poruka
              </label>
              <textarea
                className="mt-1 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment" placeholder="Napisi poruku" name="comment" rows="5" cols="40">
            </textarea>
            </div>
            <button
              className="mb-6 mt-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              Posalji
            </button>
          </div>
          <div className="ml-0 md:ml-3 md:w-1/2 w-full mt-6 rounded-xl pb-3 ">
            <iframe
              className='h-96 md:h-full w-full rounded-xl shadow-md'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1369.0826183945137!2d16.86024217806105!3d45.650691195793236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4767ac7de67c6e3b%3A0x87d5fa5c67442966!2sTrnoviti%C4%8Dki%20Popovac%2039%2C%2043233%2C%20Trnoviti%C4%8Dki%20Popovac!5e1!3m2!1sen!2shr!4v1621947047013!5m2!1sen!2shr"
              loading="lazy"
            />
          </div>
        </div>


      </div>
    </HeaderFooterLayout>
  )
}
