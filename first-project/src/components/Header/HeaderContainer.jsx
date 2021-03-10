import React from 'react';
import {authMe} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderAPIComponents extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return (
      <Header { ...this.props } />
    );
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

const HeaderContainer =  connect(mapStateToProps, {
  setAuthUserData,
  authMe
}) (HeaderAPIComponents);

export default HeaderContainer;

