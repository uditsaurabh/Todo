import React, { Component, createContext } from "react";

const BasicContext = createContext();
export default class BasicContextComponent extends Component {
  data = {
    name: "Udit"
  };
  render() {
    return (
      <BasicContext.Provider value={this.data}>
        {this.props.children}
      </BasicContext.Provider>
    );
  }
}
