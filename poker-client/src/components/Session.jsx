import React from 'react';
import SessionForm from './SessionForm';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import {connect} from 'react-redux';

export const pureSession = React.createClass({


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


export const Session = connect(mapStateToProps)(pureSession);

var ref = new Firebase("https://burning-torch-5453.firebaseio.com/sessions");

export function sessionReducer(state = {saveInProgress:false}, action) {
  switch (action.type) {
    case 'SESSION_SAVE':
      ref.push({ title: state.title, voting: state.voting});
      console.log(state);
      return state;
    case 'SESSION_SET_TITLE':
      return Object.assign({}, state, {
          title: action.title}
        );
    case 'SESSION_SET_VOTING':
      return Object.assign({}, state, {
          voting: action.voting}
        );
    default:
      return state
  }
}
