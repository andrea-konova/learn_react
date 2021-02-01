import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  const onSendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (mess) => {
    props.store.dispatch(updateNewMessageTextActionCreator(mess));
  };

  return (
    < Dialogs
      sendMessage={onSendMessage}
      updateNewMessageText={onMessageChange}
      dialogsPage={state}
    />
  );
}

export default DialogsContainer;