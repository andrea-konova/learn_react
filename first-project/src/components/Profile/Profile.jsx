import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div className={classes.wrapper}>
        <img src='https://eskipaper.com/images/airplane-flight-sunset-1.jpg' alt='background' />
      </div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;