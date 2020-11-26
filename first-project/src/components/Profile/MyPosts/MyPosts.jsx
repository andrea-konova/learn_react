import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.posts}>
      <h2 className={classes.name}>My Post</h2>
      <div>
        <textarea autoComplete='off' rows='5' name='message' className={classes.new__post} id='message' placeholder='your news...'></textarea>
        <button className={classes.button}>Send</button>
      </div>
      <Post message='We bomb the ReactJS at the rate of Dimych!'/>
      <Post message='Hello! I am learning ReactJS!'/>
    </div>
  );
}

export default MyPosts;