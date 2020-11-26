import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

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
      <MyPosts />
    </div>
  );
}

export default Profile;