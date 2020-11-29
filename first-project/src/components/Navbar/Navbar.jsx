import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
        <ul className={classes.menu}>
          <li className={classes.list}>
            <a href='/profile' className={`${classes.item} ${classes.active}`}>Profile</a>
          </li>
          <li className={classes.list}>
            <a href='/dialogs' className={classes.item}>Messages</a>
          </li>
          <li className={classes.list}>
            <a href='/news' className={classes.item}>News</a>
          </li>
          <li className={classes.list}>
            <a href='/music' className={classes.item}>Music</a>
          </li>
          <li className={`${classes.list} ${classes.mt}`}>
            <a href='/settings' className={classes.item}>Settings</a>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;