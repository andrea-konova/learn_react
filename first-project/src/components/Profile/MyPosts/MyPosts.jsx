import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.items
    .map( (p, index) => <Post message={p.message} likeCount={p.likeCount}  key={index}/> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={classes.posts}>
      <h2 className={classes.name}>My Post</h2>
      <div>
        <textarea ref={ newPostElement } autoComplete='off' rows='3' name='message' className={classes.new__post}  placeholder='your news...'></textarea>
        <button onClick={ addPost }  className={classes.button}>Send</button>
      </div>
      { postsElements }
    </div>
  );
}

export default MyPosts;