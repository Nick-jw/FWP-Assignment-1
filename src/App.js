import React from 'react'
import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Sign_In from './Components/Sign_In';
import Sign_Up from './Components/Sign_Up';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div class = 'container-fluid  border-primary'>
        <div class = 'row'>
            <Navbar />
        </div>

        <div class= 'row h-100'>
          <Routes>
            <Route path = "/" element = {<Content/>}/>
            <Route path = "sign_in" element = {<Sign_In/>} />
            <Route path = "sign_up" element = {<Sign_Up/>} />
          </Routes>
        </div>
        
        <div class = 'row'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
