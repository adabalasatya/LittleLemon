import React from 'react'
import Header from '../../Components/Header/header'
import HomeUpper from '../../Components/HomeUpper/homeupper'
import Menu from '../../Components/Menu/menu'
import Footer from '../../Components/Footer/footer'

const home = () => {
  return (
    <div>
    <Header/>
    <HomeUpper/>
    <Menu/>
    <Footer/>
    </div>
  )
}

export default home

