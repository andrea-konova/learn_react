import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    });
  }

  render() {
    return (
      <div>
        {this.state.editMode
        ? <div>
            <input onChange={ this.onStatusChange } autoFocus={ true } onBlur={ this.deactivateEditMode } className={classes.status} value={this.props.status} />
          </div>
        : <div>
            <span onDoubleClick={ this.activateEditMode } className={classes.status}>{this.state.status || 'No status'}</span>
          </div> }
      </div>
    );
  }
}

export default ProfileStatus;