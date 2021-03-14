import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {this.state.editMode
        ? <div>
            <input autoFocus={ true } onBlur={ this.deactivateEditMode.bind(this) } className={classes.status} value={this.props.status} />
          </div>
        : <div>
            <span onDoubleClick={ this.activateEditMode.bind(this) } className={classes.status}>{this.props.status}</span>
          </div> }
      </div>
    );
  }
}

export default ProfileStatus;