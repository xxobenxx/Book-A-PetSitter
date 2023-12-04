import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
// import { URL } from "./config";
import * as jose from "jose";


import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import Help from './views/Help';
import Dashboard from './views/Dashboard';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App  ()  {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  useEffect(() => {
    const verify_token = async () => {
      try {
        if (!token) {
          setIsLoggedIn(false);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.post(`localhost:3040/users/verify_token`);
          return response.data.ok ? login(token) : logout();
        }
      } catch (error) {
        console.log(error);
      }
    };
    verify_token();
  }, [token]);

  const login = (token) => {

    let decodedToken = jose.decodeJwt(token);
    // composing a user object based on what data we included in our token (login controller - jwt.sign() first argument)
    let user = {
      email: decodedToken.userEmail,
    };
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };
  
  
  return (
      <div className="App">
       
      <Router>
      <Navbar isLoggedIn={isLoggedIn} />
       <Routes>
        <Route path ='/' element={<Home/>} />

        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard/:type" />
            ) : (
              <SignIn login={login} />
            )
          }
        />

        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/dashboard/:type" /> : <SignUp />}
        />

        <Route
          path="/dashboard/:type"
          element={
            !isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Dashboard logout={logout} user={user} />
            )
          }
        />
        
  
        <Route path ='/help' element={<Help/>} />
        <Route path ='/contact_us' element={<Contact/>} />
       </Routes>
      </Router>
      <Footer />
        
    
      </div>
  );

  
      
   
};
export default App;