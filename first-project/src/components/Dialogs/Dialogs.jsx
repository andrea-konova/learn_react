import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs
    .map( (d, index) => <DialogItem name={d.name} id={d.id} key={index} /> )

  let messsagesElements = props.state.messages
    .map( (m, index) => <Message message={m.message} id={m.id} key={index} /> );

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messsagesElements }
      </div>
    </div>
  );
}

export default Dialogs;