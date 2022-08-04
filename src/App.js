import React from 'react'
import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Footer from './Components/Footer'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div class = 'container-fluid  border-primary'>
        <div class = 'row'>
            <Header />
          </div>
        <div class = 'row'>
            <Navbar />
        </div>

        <div class= 'row'>
          <Content />
        </div>
        
        <div class = 'row'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
