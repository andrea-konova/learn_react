let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'We bomb the ReactJS at the rate of Dimych!', likeCount: '15'},
        {id: 2, message: 'Hello! I am learning ReactJS!', likeCount: '20'},
        {id: 3, message: 'IT-kamsutra the best', likeCount: '99'}
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
      ]
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
    }
  }
};

export default store;
window.store = store;
