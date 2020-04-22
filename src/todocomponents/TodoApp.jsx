import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import DeleteItemComponent from "./DeleteItemComponent";
class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = { todo: [] };
  }

  componentDidMount() {
    let todo = [
      "Master React by 'death by thousand cuts'",
      "Hooks by code evolution",
    ];
    this.setState({ todo });
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerrived state from props called", props, state);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "this is from should component update ",
      this.props,
      this.state,
      nextProps,
      nextState
    );
    return true;
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {}
  componentDidUpdate() {}
  addItemToTodo = (item) => {
    let todo = this.state.todo;
    todo.push(item);
    this.setState({ todo });
  };
  deleteItem = (item) => {
    console.log("this is delete for Item", item);
    let todo = this.state.todo;
    todo = todo.filter((todo) => todo != item);
    this.setState({ todo });
  };

  render() {
    return (
      <>
        <div>
          <h1 style={{ width: "500px" }} className="mx-auto">
            Udit's Todo's App
          </h1>
        </div>
        <div className="container jumbotron">
          {this.state.todo.map((item, key) => (
            <div key={key}>
              <TodoItem todo={item}></TodoItem>
              <DeleteItemComponent
                deleteItem={() => {
                  this.deleteItem(item);
                }}
              ></DeleteItemComponent>
            </div>
          ))}
          <AddTodo addItem={this.addItemToTodo}></AddTodo>
        </div>
      </>
    );
  }
}

TodoApp.propTypes = {};

export default TodoApp;
