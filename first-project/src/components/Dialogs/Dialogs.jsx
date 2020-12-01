import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Anna'},
    {id: 4, name: 'Tima'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Vika'}
  ];

  let messagesData = [
    {id: 1, message: 'HI'},
    {id: 2, message: 'What you doing?'},
    {id: 3, message: 'I am fine!'},
    {id: 4, message: 'Good bay'}
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
}

export default Dialogs;