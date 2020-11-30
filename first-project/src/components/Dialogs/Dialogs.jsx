import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        <DialogItem name='Dimych' id='1' />
        <DialogItem name='Andrey' id='2' />
        <DialogItem name='Ania' id='3' />
        <DialogItem name='Tima' id='4' />
        <DialogItem name='Sasha' id='5' />
        <DialogItem name='Vika' id='6' />
      </div>
      <div className={classes.messages}>
        <Message message='Hello' />
        <Message message='What you doing?' />
        <Message message='I am fine!' />
      </div>
    </div>
  );
}

export default Dialogs;