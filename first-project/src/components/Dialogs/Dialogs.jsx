import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs
    .map( (d, index) => <DialogItem name={d.name} id={d.id} key={index} /> )

  let messsagesElements = props.state.messages
    .map( (m, index) => <Message message={m.message} id={m.id} key={index} /> );

  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let mess = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(mess));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messsagesElements }
      </div>
      <div className={classes.add__message}>
        <textarea onChange={ onMessageChange }
                  value={ props.newMessageText }
                  ref={ newMessageElement } rows='3'
                  className={classes.new__mess} />
        <button onClick={ addMessage } className={classes.button}>Send Message</button>
      </div>
    </div>
  );
}

export default Dialogs;