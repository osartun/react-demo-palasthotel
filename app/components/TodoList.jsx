import React from "react";
import _ from "underscore";
import TodoListItem from "./TodoListItem.jsx";

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

  handleType(id, text) {
    const todos = this.state.todos;
    const todo = _.findWhere(todos, { id });
    todo.text = text;
    this.setState({ todos });
  }

  handleSubmit(e) {
    this.ensureEmptyTodo();
  }

  handleCheck(id, e) {
    const todos = this.state.todos;
    const todo = _.findWhere(todos, { id });
    todo.checked = !todo.checked;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                {...todo}
                onType={this.handleType.bind(this, todo.id)}
                onCheck={this.handleCheck.bind(this, todo.id)}
                onSubmit={this.handleSubmit.bind(this)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
