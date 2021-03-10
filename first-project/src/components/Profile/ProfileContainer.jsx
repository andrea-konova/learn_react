import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileAPIComponents extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }

  render() {
    return (
      <Profile { ...this.props } profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileAPIComponents);

const ProfileContainer = connect(mapStateToProps, {
  setUserProfile, getProfile
}) (WithUrlDataContainerComponent);

export default ProfileContainer;