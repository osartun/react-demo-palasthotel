import React from "react";
import _ from "underscore";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.createTodo();
  }

  createTodo() {
    const newTodo = {
      id: _.uniqueId("todo"),
      text: "",
      checked: false,
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos });
    return newTodo;
  }

  handleType(id, e) {
    const todos = this.state.todos;
    const todo = _.findWhere(todos, { id });
    todo.text = e.target.value;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li>
                <input
                  type="text"
                  value={todo.text}
                  placeholder="New List Item"
                  onChange={this.handleType.bind(this, todo.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
