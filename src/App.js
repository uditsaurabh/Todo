import React from "react";
//import logo from './logo.svg';
import "./App.css";
import StudentDisplay from "./components/studentpage";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BasicContextComponent from "./components/BasicContext";
import Welcome from "./components/Welcome";
import TodoApp from "./todocomponents/TodoApp";
import AddTodo from "./todocomponents/AddTodo";
function App() {
  return (
    <div>
      <TodoApp></TodoApp>
    </div>
  );
}

export default App;
