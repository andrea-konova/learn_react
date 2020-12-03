import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Anna'},
    {id: 4, name: 'Tima'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Vika'}
  ];

  let messages = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'What you doing?'},
    {id: 3, message: 'I am fine!'},
    {id: 4, message: 'Good bay'}
  ];

  let dialogsElements = dialogs
    .map( d => <DialogItem name={d.name} id={d.id} /> )

  let messsagesElements = messages
    .map( m => <Message message={m.message} /> );

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