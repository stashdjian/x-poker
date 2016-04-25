import React from 'react'
import TextField from 'material-ui/lib/text-field';
import Divider from 'material-ui/lib/divider';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      voting: null
    };
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  };

  handleVotingChange(event, index, value) {
    this.setState({
      voting: value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          hintText="Session Title"
          value={this.state.title}
          onChange={this.handleTitleChange.bind(this)}
        />
        <br/>
        <SelectField
          value={this.state.voting}
          onChange={this.handleVotingChange.bind(this)}
          hintText="Select Voting Values">
            <MenuItem value={1} primaryText="Fibonacci"/>
            <MenuItem value={2} primaryText="Modified Fibonacci"/>
            <MenuItem value={3} primaryText="1-10"/>
        </SelectField>
      </div>
    );
  }
}
