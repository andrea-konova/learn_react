import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.items
    .map( (p, index) => <Post message={p.message} likeCount={p.likeCount}  key={index}/> );

  return (
    <div className={classes.posts}>
      <h2 className={classes.name}>My Post</h2>
      <div>
        <textarea autoComplete='off' rows='5' name='message' className={classes.new__post} id='message' placeholder='your news...'></textarea>
        <button className={classes.button}>Send</button>
      </div>
      { postsElements }
    </div>
  );
}

export default MyPosts;