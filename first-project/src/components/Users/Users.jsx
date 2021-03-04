import React from 'react';
import classes from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
          <div>
            {pages.map( (p, index) => {
              return <span className={props.currentPage === p && classes.selectedPage } key={index}
              onClick={ (e) => { props.onPageChanged(p); }}>{ p }</span>
            })}
          </div>
          {
            props.users.map( u => <div key={u.id}>
          <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img alt={'userImage'} src={ u.photos.small != null ? u.photos.small : userPhoto } className={classes.userPhoto} />
                </NavLink>
            </div>
            <div>
              { u.followed
                  ? <button onClick={ () => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': '383db240-f6d5-4f28-a3cb-caf098365e3a'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });

                  }}>Unfollow</button>

                  : <button onClick={ () => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': '383db240-f6d5-4f28-a3cb-caf098365e3a'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                   }}>Follow</button>
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