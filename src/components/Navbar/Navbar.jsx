import React from 'react';
import pop from'./Navbar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (      
    <nav className={pop.nav}>
    <div className={`${pop.item}`} >
      <NavLink to="/profile" activeClassName={pop.activeLink}>Profile</NavLink>
    </div>
    <div className={pop.item}>
      <NavLink to="/dialogs" activeClassName={pop.activeLink}>Messanges</NavLink>
    </div>
    <div className={pop.item}>
      <NavLink to="/news" activeClassName={pop.activeLink}>News</NavLink>
    </div>
    <div className={pop.item}>
      <NavLink to="/music" activeClassName={pop.activeLink}>Music</NavLink>
    </div>
    <div className={pop.item}>
      <NavLink to="/settings" activeClassName={pop.activeLink}>Settings</NavLink>
    </div>
  </nav>
        )
        
        };
    
export default Navbar;