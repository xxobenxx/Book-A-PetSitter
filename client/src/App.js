import React, { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Navbar from './components/Navbar';






// import About from './components/About';
// import Contacts from './components/Contacts';
// import Profile from './components/Profile';
// import Footer from './components/Footer';

const App = () => {
  const [ page, setPage ] = useState('');
  const renderPages = (page) => {
      setPage(page);
      console.log(page);
  };

  
  return (
      <div className="App">
        <Navbar selectPage={renderPages} />
  
        {page === 'Home' ? <Home /> : page === 'Sign In' ? <SignIn /> : page === 'Sign Up' ? <SignUp /> : <Home />}
          
      </div>
  );
};
export default App;