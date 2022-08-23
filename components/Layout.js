import React from 'react'
import Footer from '../views/Footer'
import Header from '../views/Header'

function Layout({children}) {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
  )
}

export default Layout