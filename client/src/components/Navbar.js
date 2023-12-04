import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ({isLoggedIn}) => {

  return (
    <div className="navbar">

    <NavLink 
    to={"/"}
      style={ ({isActive}) => (
    isActive ? linkStyles.activeLink : linkStyles.defaultLink
  )}>
    Home
    </NavLink>

    {isLoggedIn===false
      && <>

      <NavLink
      to="/register"
      style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
      Register
      </NavLink>

      <NavLink
      to="/login"
      style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
      Login
      </NavLink>

      <NavLink
      to="/contact_us"
      style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
      Contact Us
      </NavLink>

      <NavLink
      to="/help"
      style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
      Help
      </NavLink>
      </>

    }

    {isLoggedIn===true    
    && <>
      <NavLink  
      to="/dashboard"
      style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
      User Dashboard
      </NavLink>
      </>
    }

      </div>
      );
}

export default Navbar;

const linkStyles = {
  activeLink: {
    color: "blue",
  },
  defaultLink: {
    textDecoration: "none",
    color: "orange",
  },
};




