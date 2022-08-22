import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Footer from './Components/Footer'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Feed from './Components/Feed';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'



function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  const onSignIn = (email) => {
    setLoggedInUser(email)
    localStorage.setItem('loggedInUser',email)
  };
  const onLogout = () => {
    setLoggedInUser(null)
    localStorage.removeItem("loggedInUser")
  };



  return (
    <BrowserRouter>
      <div class = 'container-fluid  border-primary'>
        <div class = 'row'>    
            <Navbar loggedInUser = {loggedInUser} onLogout = {onLogout}/> 
        </div>

        <div class= 'row h-100'>
          <Routes>
            <Route path = "/" element = {<Content/>}/>
            <Route path = "sign_in" element = {<SignIn onSignIn = {onSignIn} />} />
            <Route path = "sign_up" element = {<SignUp/>} />
            <Route path = 'feed' element = {<Feed/>}/>

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
