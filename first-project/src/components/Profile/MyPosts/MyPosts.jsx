import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'We bomb the ReactJS at the rate of Dimych!', likeCount: '15'},
    {id: 2, message: 'Hello! I am learning ReactJS!', likeCount: '20'}
  ];

  let postsElements = posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> );

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