import React from 'react';
import SessionForm from './SessionForm';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import {connect} from 'react-redux';

export const pureSession = React.createClass({


  componentDidMount: function(){
    const {dispatch} = this.props;
    dispatch({type: 'SET_APP_BAR', title: 'Create Session', rightBtn: 'Save' });
  },

  getInitialState: function() {
    return {dialogOpen: false};
  },

  onSave(event){
    this.setState({dialogOpen: true});
  },

  handleDialogClose(event){
    this.setState({dialogOpen: false});
  },

  render: function() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleDialogClose}
      />,
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDialogClose}
      />,
    ];
    return <div className="session">
      <Dialog
        title="Confirm"
        actions={actions}
        modal={false}
        open={this.state.dialogOpen}
        onRequestClose={this.handleClose}
      >
        You are saving this session.
      </Dialog>
      <h3>Define your Session</h3>
      <SessionForm/>
    </div>;
  }
});

export const Session = connect()(pureSession);
