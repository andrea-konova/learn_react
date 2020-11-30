import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div>
      <NavLink to={path} className={classes.dialog} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;