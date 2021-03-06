const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Anna'},
    {id: 4, name: 'Tima'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Vika'}
  ],
  messages: [
    {id: 1, message: 'HI'},
    {id: 2, message: 'What you doing?'},
    {id: 3, message: 'I am fine!'},
    {id: 4, message: 'Good bay'}
  ],
  newMessageText: 'Say hi to your friends'
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body =state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 6, message: body}]
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      };
    default:
      return state;
  }
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