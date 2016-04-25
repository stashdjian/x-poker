import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

export const pureXMenu = React.createClass({


  handleToggle: function(){
    const {dispatch,open} = this.props;
    dispatch({type: 'MENU_TOGGLE'});
  },

  handleNewSession: function(){
    browserHistory.push('/session');
    this.handleToggle();

  },

  handleGoHome: function(){
    browserHistory.push('/');
    this.handleToggle();
  },

  handleReqChange: function(open){
    const {dispatch,open_state} = this.props;
    dispatch({type: 'MENU_TOGGLE'});
  },

  render() {
    return (
      <LeftNav
        docked={false}
        width={200}
        open={this.props.open}
        onRequestChange={this.handleReqChange}
      >
        <MenuItem onTouchTap={this.handleGoHome}>Home</MenuItem>
        <MenuItem onTouchTap={this.handleNewSession}>New Session</MenuItem>
      </LeftNav>
    );
  }
});

function mapStateToProps(state) {
  return {
    open: state.menuState.open
  };
}

export const XMenu = connect(mapStateToProps)(pureXMenu);
