import React, {Component} from 'react';

class Error extends Component {
  render() {
    return (
      <div style={{color: 'red'}}>
        {this.props.error}
      </div>
    );
  }
}

export default Error;