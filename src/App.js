
import React from 'react';
import './App.css'
import  Nav from './Components/Nav/nav'
import Header from './Components/Header/header'
import Menu from './Components/Menu/menu'
import Footer from "./Components/Footer/footer"



function App() {
    return (
        <>
        <Nav/>
            <Header/>
                 <Menu/>
                       <Footer/>
        </>
    );
}

export default App;
