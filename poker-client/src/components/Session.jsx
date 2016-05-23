import React from 'react';
import {List,ListItem} from 'material-ui/lib/lists';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

export const pureSession = React.createClass({
  contextTypes : {
    redux: React.PropTypes.object
  },

  componentDidMount: function(){
    const {dispatch} = this.props;
    var ref = new Firebase("https://burning-torch-5453.firebaseio.com/sessions/"+this.props.params.session_key);
    ref.on("value", function(snapshot) {
      const session = snapshot.val();
      dispatch({type: 'SESSION_LOAD', session:session});
      dispatch({type: 'SET_APP_BAR', title: session.title, rightBtn: false });
    }.bind(this), function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  },

  render: function() {
    if (! this.props.session) return <div></div>;
    return <div className="x-poker">
        <h3>Welcome to session {this.props.session.title}.</h3>
    </div>;
  }
});

function mapStateToProps(state,ownProps) {
  return {session: state.session.currentSession};
};

export const Session = connect(mapStateToProps)(pureSession);

var ref = new Firebase("https://burning-torch-5453.firebaseio.com/sessions");
export function sessionReducer(state = {saveInProgress:false}, action) {
  switch (action.type) {
    case 'SESSION_SAVE':
      setTimeout( () => ref.push({ title: state.title, voting: state.voting}),0);
      browserHistory.push('/');
      return state;
    case 'SESSION_SET_TITLE':
      return Object.assign({}, state, {
          title: action.title}
        );
    case 'SESSION_SET_VOTING':
      return Object.assign({}, state, {
          voting: action.voting}
        );
    case 'SESSION_OPEN':
        browserHistory.push('/'+action.key);
        return state;
    case 'SESSION_LOAD':
      return Object.assign({}, state, {
        currentSession: action.session}
      );
    default:
      return state
  }
}
