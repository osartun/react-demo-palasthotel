import React, { Component } from "react";
import _ from 'underscore';
import TodoList from './TodoList.jsx';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
    };
  }

  createTodoList() {
    const newTodoList = { id: _.uniqueId("todo-list") };
    const todoLists = this.state.todoLists;
    todoLists.push(newTodoList);
    this.setState({ todoLists });
  }

  render() {
    return (
      <div className="todo-app">
        <ul>
          {this.state.todoLists.map((todoList) => {
            return (
              <li>
                <TodoList key={todoList.id} />
              </li>
            );
          })}
          <li>
            <div className="new-todo-list" onClick={this.createTodoList.bind(this)} />
          </li>
        </ul>
      </div>
    );
  }
}