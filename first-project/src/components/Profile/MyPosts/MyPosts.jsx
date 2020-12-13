import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.items
    .map( (p, index) => <Post message={p.message} likeCount={p.likeCount}  key={index}/> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.posts}>
      <h2 className={classes.name}>My Post</h2>
      <div>
        <textarea onChange={ onPostChange }
                  value={ props.newPostText }
                  ref={ newPostElement } rows='3'
                  className={classes.new__post} />
        <button onClick={ addPost } className={classes.button}>Send</button>
      </div>
      { postsElements }
    </div>
  );
}

export default MyPosts;