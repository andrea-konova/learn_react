const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'We bomb the ReactJS at the rate of Dimych!', likeCount: '15'},
        {id: 2, message: 'Hello! I am learning ReactJS!', likeCount: '20'},
        {id: 3, message: 'IT-kamasutra the best', likeCount: '99'}
      ],
      newPostText: 'Write something'
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Anna'},
        {id: 4, name: 'Tima'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Vika'}
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // pattern observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.text;
        this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
          id: 6,
          message: this._state.dialogsPage.newMessageText
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    };
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
};

export const updateNewMessageTextActionCreator = (mess) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: mess
  }
};

export default store;
window.store = store;
