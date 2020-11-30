import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
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
  );
}

export default ProfileInfo;