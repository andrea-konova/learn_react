import React from 'react';
import classes from './Users.module.css';
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
          <div>
            {pages.map( p => {
              return <span className={props.currentPage === p && classes.selectedPage }
              onClick={ (e) => { props.onPageChanged(p); }}>{ p }</span>
            })}
          </div>
          {
            props.users.map( u => <div key={u.id}>
          <span>
            <div>
              <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.userPhoto} />
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
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </span>

            </div>)
          }
        </div>
    );
}

export default Users;