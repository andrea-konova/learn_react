import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.wrapper}>
        <img src='https://eskipaper.com/images/airplane-flight-sunset-1.jpg' alt='background' />
      </div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;