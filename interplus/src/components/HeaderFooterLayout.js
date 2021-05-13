import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from "../styles/styles.css"

export default function HeaderFooterLayout({ children }) {
  return (
    <div>
        <Navbar />
      <div className='custom-container'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
