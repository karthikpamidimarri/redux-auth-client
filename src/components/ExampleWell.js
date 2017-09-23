import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ExampleWell extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div>
        <label>Example</label>
        <Panel bsStyle="default">
          {this.props.children}
        </Panel>
      </div>
    );
  }
}

export default ExampleWell;

