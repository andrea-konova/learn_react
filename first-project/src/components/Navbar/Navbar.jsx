import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Navbar = (props) => {
  return <nav className={classes.navbar}>
      <ul className={classes.menu}>
        <li className={classes.list}>
          <NavLink to='/profile' className={classes.item} activeClassName={classes.active}>Profile</NavLink>
        </li>
        <li className={classes.list}>
          <NavLink to='/dialogs' className={classes.item} activeClassName={classes.active}>Messages</NavLink>
        </li>
        <li className={classes.list}>
          <NavLink to='/news' className={classes.item} activeClassName={classes.active}>News</NavLink>
        </li>
        <li className={classes.list}>
          <NavLink to='/music' className={classes.item} activeClassName={classes.active}>Music</NavLink>
        </li>
        <li className={`${classes.list} ${classes.mt}`}>
          <NavLink to='/settings' className={classes.item} activeClassName={classes.active}>Settings</NavLink>
        </li>
      </ul>
      <SidebarContainer />
    </nav>;
}

export default Navbar;