import Navbar from "./Navbar";
import Footer from "./Footer";

import React from 'react'

function Layout({ children }) {
  return (
    <>
    <Navbar />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout