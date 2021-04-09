import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {

  if (props.id % 2 === 0) {
    return (
      <div className={`${classes.item} ${classes.item__right}`}>
        <span className={`${classes.message} ${classes.message__right}`}>{props.message}</span>
      </div>
    );
  } else {
    return (
      <div className={`${classes.item} ${classes.item__left}`}>
        <span className={`${classes.message} ${classes.message__left}`}>{props.message}</span>
      </div>
    );
  }

  // return (
  //   <p className={`${classes.message} ${classes.message__right}`}>{props.message}</p>
  // );
}

export default Message;