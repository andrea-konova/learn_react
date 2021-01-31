const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      break;
  }

  return state;
};

export const addMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  }
};

export const updateNewMessageTextActionCreator = (mess) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: mess
  }
};

export default dialogsReducer;