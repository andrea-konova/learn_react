import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs
    .map( (d, index) => <DialogItem name={d.name} id={d.id} key={index} /> )

  let messagesElements = state.messages
    .map( (m, index) => <Message message={m.message} id={m.id} key={index} /> );

  let newMessageElement = React.createRef();

  const onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let mess = newMessageElement.current.value;
    props.updateNewMessageText(mess);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__items}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
      <div className={classes.add__message}>
        <textarea onChange={ onMessageChange }
                  value={ state.newMessageText }
                  ref={ newMessageElement } rows='3'
                  className={classes.new__mess} />
        <button onClick={ onSendMessage } className={classes.button}>Send Message</button>
      </div>
    </div>
  );
}

export default Dialogs;