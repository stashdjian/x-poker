import React from 'react';
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
    </div>;
  }
});

export const Home = connect()(pureHome);
