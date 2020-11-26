import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.wrapper}>
        <img src='https://eskipaper.com/images/airplane-flight-sunset-1.jpg' alt='background' />
      </div>
      <div className={classes.author}>
        <div className={classes.author__logo}>
          <img src='https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg' alt='author__logo' />
        </div>
        <div className={classes.author__description}>
          <h2 className={classes.name}>Andrii K.</h2>
          <p className={classes.info}>Date of Birth: 13 february</p>
          <p className={classes.info}>City: Kharkiv</p>
          <p className={classes.info}>Education: KHAI'18</p>
          <p className={classes.info}>Web Site: https://andrii-konovalenko.co.ua/</p>
        </div>
      </div>
      <div className={classes.posts}>
        <h2 className={classes.name}>My Post</h2>
        <div>
          <textarea autoComplete='off' rows='5' name='message' className={classes.new__post} id='message' placeholder='your news...'></textarea>
          <button className={classes.button}>Send</button>
        </div>
        <div>
          post-1
        </div>
        <div>
          post-2
        </div>
      </div>
    </div>
  );
}

export default Profile;