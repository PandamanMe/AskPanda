import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/globe.svg'

const leftSidebar = () => {
  return (
    <div className='left-sidebar'>l
        <nav className='side-nav'>
           <NavLink to='/' className='side-nav-links' activeClass='active'>
              <p>Home</p>
           </NavLink>
            <div className='side-nav-div'>
               <div><p>PUBLIC</p></div>
                 <NavLink to='/Questions' className='side-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
                     <img src={Globe} alt="Globe" />
                     <p style={{paddingLeft: "10px"}}> Questions </p>
                 </NavLink>
                 <NavLink to='/Tags' style={{paddingLeft:"40px"}} className='side-nav-links' activeClass='active'>
                      <p>Tags</p>
                 </NavLink>
                 <NavLink to='/Tags' style={{paddingLeft:"40px"}} className='side-nav-links' activeClass='active'>
                      <p>Users</p>
                 </NavLink>
            </div> 
        </nav>
    </div>
  )
}

export default leftSidebar