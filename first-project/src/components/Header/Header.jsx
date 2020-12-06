import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <span className={classes.logo}>vReacte</span>
    </header>
  );
}

export default Header;