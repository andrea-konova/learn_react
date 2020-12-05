import React from 'react';
import classes from './Sidebar.module.css';
import Friend from "./Friend/Friend";

const Sidebar = (props) => {
  let sidebarElements = props.items
    .map( (f, index) => <Friend name={f.name} id={f.id} key={index} /> )

  return (
    <div  className={classes.friends}>
      <h3 className={classes.title}>Friends</h3>
      <div className={classes.main__friends}>
        { sidebarElements }
      </div>
    </div>
  );
}

export default Sidebar;