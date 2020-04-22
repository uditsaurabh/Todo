import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return <>{this.props.todo}</>;
  }
}

export default TodoItem;
