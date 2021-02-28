import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
      <div className={classes.author}>
        <div className={classes.author__logo}>
          <img src={props.profile.photos.large} alt='author__logo' />
        </div>
        <div className={classes.author__description}>
          <h2 className={classes.name}>{props.profile.fullName}</h2>
          <p className={classes.info}>About Me: {props.profile.aboutMe}</p>
          <p className={classes.info}>looking For AJob: {props.profile.lookingForAJob ? 'уes' : 'no'}</p>
          <p className={classes.info}>looking For A Job Description: {props.profile.lookingForAJobDescription}</p>
          <p className={classes.info}>instagram: {props.profile.contacts.instagram}</p>
        </div>
      </div>
  );
}

export default ProfileInfo;