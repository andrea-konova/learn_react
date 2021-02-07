
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
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 4, message: text, likeCount: 0}]
      };
    case UPDATE_NEW_POST_TEXT:
      return  {
        ...state,
        newPostText: action.text,
      };
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