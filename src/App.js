import React from 'react'
import './App.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  return (
    <div class = 'container-fluid'>
      <div class = 'row'>

          <Header />
      <div class = 'row'>
          <Navbar />
      </div>

      </div>
      <div class= 'row'>
        <Content />
      </div>
      
      <div class = 'row'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
