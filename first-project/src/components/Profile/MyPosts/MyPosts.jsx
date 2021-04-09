import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map( (p, index) => <Post message={p.message} likeCount={p.likeCount}  key={index}/> );

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.posts}>
      <h2 className={classes.name}>My Post</h2>
      <div>
        <textarea onChange={ onPostChange }
                  value={ props.newPostText }
                  ref={ newPostElement } rows='3'
                  className={classes.new__post} />
        <button onClick={ onAddPost } className={classes.button}>Send</button>
      </div>
      { postsElements }
    </div>
  );
}

export default MyPosts;