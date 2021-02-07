
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'We bomb the ReactJS at the rate of Dimych!', likeCount: '15'},
    {id: 2, message: 'Hello! I am learning ReactJS!', likeCount: '20'},
    {id: 3, message: 'IT-kamasutra the best', likeCount: '99'}
  ],
  newPostText: 'Write something'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likeCount: 0
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      console.log(stateCopy);
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.text;
      return stateCopy;
    }
    default:
      return state;
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

export default profileReducer;