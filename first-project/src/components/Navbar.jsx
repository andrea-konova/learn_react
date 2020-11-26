import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
        <ul className={classes.menu}>
          <li className={classes.list}>
            <a href='#' className={`${classes.item} ${classes.active}`}>Profile</a>
          </li>
          <li className={classes.list}>
            <a href='#' className={classes.item}>Messages</a>
          </li>
          <li className={classes.list}>
            <a href='#' className={classes.item}>News</a>
          </li>
          <li className={classes.list}>
            <a href='#' className={classes.item}>Music</a>
          </li>
          <li className={`${classes.list} ${classes.mt}`}>
            <a href='#' className={classes.item}>Settings</a>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;