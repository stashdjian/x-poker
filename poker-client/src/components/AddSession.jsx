import React from 'react';
import SessionForm from './SessionForm';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import {connect} from 'react-redux';

export const pureAddSession = React.createClass({


  componentDidMount: function(){
    const {dispatch} = this.props;
    dispatch({type: 'SET_APP_BAR', title: 'Create Session', rightBtn: {text:'Save',action:'SESSION_SAVE'} });
  },


  render: function() {
    return <div className="session">
      <h3>Define your Session</h3>
      <SessionForm/>
    </div>;
  }
});

function mapStateToProps(state,ownProps) {
  return {saving: state.session.saveInProgress};
};


export const AddSession = connect(mapStateToProps)(pureAddSession);
