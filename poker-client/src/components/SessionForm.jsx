import React from 'react'
import TextField from 'material-ui/lib/text-field';
import Divider from 'material-ui/lib/divider';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import {connect} from 'react-redux';

export const pureSessionForm = React.createClass({
  propTypes: {
      // redux action hookups, set up below
      handleVotingChange: React.PropTypes.func.isRequired,
      handleTitleChange: React.PropTypes.func.isRequired
  },


  render: function() {
    return (
      <div>
        <TextField
          hintText="Session Title"
          value={this.props.title}
          onChange={this.props.handleTitleChange}
        />
        <br/>
        <SelectField
          value={this.props.voting}
          onChange={this.props.handleVotingChange}
          hintText="Select Voting Values">
            <MenuItem value={1} primaryText="Fibonacci"/>
            <MenuItem value={2} primaryText="Modified Fibonacci"/>
            <MenuItem value={3} primaryText="1-10"/>
        </SelectField>
      </div>
    );
  }
});

function mapStateToProps(state,ownProps) {
  return {
    title: state.session.title,
    voting: state.session.voting
  };
};

function mapDispatchToProps(dispatch){
    return {
        handleVotingChange: function(event, index, value){ dispatch({type: 'SESSION_SET_VOTING', voting:value }); },
        handleTitleChange: function(event){ dispatch({type: 'SESSION_SET_TITLE', title: event.target.value, }); }
    }
};


const SessionForm = connect(mapStateToProps,mapDispatchToProps)(pureSessionForm);

export default SessionForm;
