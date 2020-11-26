import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src='https://www.flaticon.com/svg/static/icons/svg/1384/1384085.svg' alt='logo'/>
    </header>
  );
}

export default Header;