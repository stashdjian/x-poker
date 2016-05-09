import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import {XMenu} from './XMenu';
import FlatButton from 'material-ui/lib/flat-button';
import {connect} from 'react-redux';

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export const pureAppBar = React.createClass({

  onNavButtonClick: function(){
    const {dispatch,open} = this.props;
    dispatch({type: 'MENU_TOGGLE'});
  },

  handleSave: function() {
    const {dispatch,open} = this.props;
    dispatch({type: this.props.rightBtn.action, action:{} });
  },

  render: function() {
    var iconRight = this.props.rightBtn?<FlatButton label={this.props.rightBtn.text} onTouchTap={this.handleSave}/>:null;
    return <div>
      <AppBar
        title={this.props.title}
        onLeftIconButtonTouchTap={this.onNavButtonClick}
        iconElementRight={iconRight}
        />
      <XMenu ref='xmenu'></XMenu>
    </div>
  }
});

function mapStateToProps(state) {
  return {
    title: state.app.appBar.title,
    rightBtn: state.app.appBar.rightBtn
  };
}


export const XAppBar = connect(mapStateToProps)(pureAppBar);
