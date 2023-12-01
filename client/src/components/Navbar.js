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

      <NavLink  
      to="/dashboard"
      style={ ({isActive}) => (
        isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
      User Dashboard
      </NavLink>

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




// const Navbar = (props)=>{
//   return <div className='navbar'>

//               <ul onClick={ (e)=>props.selectPage(e.target.textContent) }>
                
               
//                 <div className='navbar1'>

//                 <li>Home</li>
//                 <li>Our Services</li>
//                 <li>Search Sitters</li>
                
//                 </div>          
                
                
//                 <div className='navbar2'>
//                 <li>Sign In</li>
//                 <li>Sign Up</li>
//                 <li>Become a Pet Sitter</li>

//                 </div>
                
              
//                 </ul>
              
              
//           </div>
// }