import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
