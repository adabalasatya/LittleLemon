import React from 'react'
import Header from '../../Components/Header/header'
import Menu from '../../Components/Menu/menu'
import Footer from '../../Components/Footer/footer'

const menu = () => {
  return (
    <div>
    <Header/>
    <hr className="long-line" />
      <Menu/>
      <Footer/>
    </div>
  )
}

export default menu
