import React from "react";
import _ from "underscore";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentWillMount() {
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

  ensureEmptyTodo() {
    const last = _.last(this.state.todos);
    if (last.text !== "") {
      // There's no empty todo at the end anymore
      return this.createTodo();
    }
  }

  handleType(id, e) {
    const todos = this.state.todos;
    const todo = _.findWhere(todos, { id });
    todo.text = e.target.value;
    this.setState({ todos });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.ensureEmptyTodo();
  }

  handleCheck(id, e) {
    const todos = this.state.todos;
    const todo = _.findWhere(todos, { id });
    todo.checked = e.target.checked;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input
                    className={todo.text ? "show" : "hidden"}
                    type="checkbox"
                    checked={todo.checked}
                    onChange={this.handleCheck.bind(this, todo.id)}
                  />
                  <input
                    type="text"
                    value={todo.text}
                    placeholder="New List Item"
                    onChange={this.handleType.bind(this, todo.id)}
                  />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
