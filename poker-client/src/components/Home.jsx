import React from 'react';
import {List,ListItem} from 'material-ui/lib/lists';
import {connect} from 'react-redux';

export const pureHome = React.createClass({
  contextTypes : {
    redux: React.PropTypes.object
  },

  componentDidMount: function(){
    const {dispatch} = this.props;
    dispatch({type: 'SET_APP_BAR', title: 'X-Poker', rightBtn: false });
  },

  render: function() {
    return <div className="x-poker">
        <h3>This is our home page.</h3>
        <List>
          {
          this.props.sessions.map(function(session) {
            return <ListItem key={session.title} primaryText={session.title}/>
          })
          }
        </List>
    </div>;
  }
});

function mapStateToProps(state,ownProps) {
  return {sessions: state.app.sessions};
};

export const Home = connect(mapStateToProps)(pureHome);
