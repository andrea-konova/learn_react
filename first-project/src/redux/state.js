import {rerenderEntireTrie} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'We bomb the ReactJS at the rate of Dimych!', likeCount: '15'},
      {id: 2, message: 'Hello! I am learning ReactJS!', likeCount: '20'},
      {id: 3, message: 'IT-kamsutra the best', likeCount: '99'}
    ]
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 4,
    message: postMessage,
    likeCount: 0
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTrie(state);
};

export default state;