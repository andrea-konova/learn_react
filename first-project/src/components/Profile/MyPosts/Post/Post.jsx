import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div  className={classes.item}>
      <div className={classes.wrapper}>
        <img src='https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' alt='people'/>
      </div>
      <p className={classes.info}>
        { props.message }
        <span className={classes.like}>like: { props.likeCount }</span>
      </p>
      
    </div>
  );
}

export default Post;