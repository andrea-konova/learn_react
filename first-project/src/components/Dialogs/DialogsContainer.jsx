import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        const onSendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessageChange = (mess) => {
          store.dispatch(updateNewMessageTextActionCreator(mess));
        };
        return (
          < Dialogs
            sendMessage={onSendMessage}
            updateNewMessageText={onMessageChange}
            dialogsPage={state}
          />
        )
      }
    }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;