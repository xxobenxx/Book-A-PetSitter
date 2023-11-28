import React from 'react'


const Navbar = (props)=>{
    return <div className='navbar'>

                <ul onClick={ (e)=>props.selectPage(e.target.textContent) }>
                  
                 
                  <div className='navbar1'>

                  <li>Home </li>
                  <li>Our Services  </li>
                  <li>Search Sitters </li>
                  
                  </div>          
                  
                  
                  <div className='navbar2'>
                  <li>Sign In</li>
                  <li>Sign Up</li>
                  <li>Become a Pet Sitter</li>

                  </div>
                  
                
                  </ul>
                
                
            </div>
}
export default Navbar