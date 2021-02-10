import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
  debugger
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
        followed: true,
        fullName: 'Dimych',
        status: 'He is big boss',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 2,
        photoUrl: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
        followed: false,
        fullName: 'Andrew',
        status: 'I\'m student' ,
        location: {city: 'Kharkiv', country: 'Ukraine'}
      },
      {
        id: 3,
        photoUrl: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
        followed: true,
        fullName: 'Anna',
        status: 'I am Andrey\'s wife ' ,
        location: {city: 'Kharkiv', country: 'Ukraine'}
      },
      {
        id: 4,
        photoUrl: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
        followed: true,
        fullName: 'Tima',
        status: 'I\'m a little javascript programmer' ,
        location: {city: 'Kharkiv', country: 'Ukraine'}
      }
    ])
  }
  debugger
  return (
    <div>
      {
        props.users.map( u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={classes.userPhoto} />
            </div>
            <div>
              { u.followed
                ? <button onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
                : <button onClick={ () => { props.follow(u.id) }}>Follow</button>
              }
            </div>
          </span>
          <span>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </span>

        </div>)
      }
    </div>
  );
}

export default Users;