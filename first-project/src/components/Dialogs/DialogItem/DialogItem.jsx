import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={classes.dialog__item}>
      <span className={classes.logo}>{props.name.substring(0,1)}</span>
      <NavLink to={path} className={classes.dialog} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;