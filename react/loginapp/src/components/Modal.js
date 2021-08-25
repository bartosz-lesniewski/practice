import react, { Component } from 'react';

export default class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return <div>You have registered successfully</div>;
  }
}
