import React from 'react';
import {List} from 'immutable';


export default React.createClass({
  render: function() {
    var content = React.cloneElement(this.props.children);
    return <div>
      <div>{content}</div>
    </div>

  }
});
