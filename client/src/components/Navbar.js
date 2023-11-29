import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
  return (
    <div className='navbar'>

  <NavLink to={'/'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
         Home 
 </NavLink>

  <NavLink to={'/becomeasitter'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
        Become a Sitter
  </NavLink>

  <NavLink to={'/signin'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
        Sign In
 </NavLink>

  <NavLink to={'/signup'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
        Sign Up
  </NavLink>

  <NavLink to={'/contact'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
        Contact Us
  </NavLink>

  <NavLink to={'/help'} style={({isActive})=> isActive ? styles.activeLink : styles.defaultLink}>
        Help
  </NavLink>
  
  </div>
  )
}
  let styles = {
    activeLink:{
      color:'orange'
    }, 
    defaultLink:{
      color:'blue'
    }
  };

export default Navbar;




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