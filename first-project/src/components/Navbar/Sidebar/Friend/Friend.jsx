import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={classes.friend__item}>
      <span className={classes.logo}>{props.name.substring(0,1)}</span>
      <p className={classes.friend}>{props.name}</p>
    </div>
  );
}

export default Friend;