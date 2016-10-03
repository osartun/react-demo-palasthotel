import React from "react";
import _ from "underscore";
import TodoListItem from "./TodoListItem.jsx";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inFocus: -1,
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

  getTodos() {
    return _.sortBy(this.state.todos, "checked");
  }

  handleType(id, text) {
    const todos = this.state.todos;
    const todo = _.findWhere(todos, { id });
    todo.text = text;
    this.setState({ todos, inFocus: id });
  }

  handleSubmit(e) {
    const newTodo = this.ensureEmptyTodo();
    if (newTodo) {
      this.setState({ inFocus: newTodo.id });
    }
  }

  handleCheck(id, e) {
    const todos = this.state.todos;
    const todo = _.findWhere(todos, { id });
    todo.checked = !todo.checked;
    this.setState({ todos });
  }

  handleFocusChange(id, focused) {
    const inFocus = focused ? id : -1;
    this.setState({ inFocus });
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.getTodos().map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                {...todo}
                focused={this.state.inFocus === todo.id}
                onType={this.handleType.bind(this, todo.id)}
                onCheck={this.handleCheck.bind(this, todo.id)}
                onSubmit={this.handleSubmit.bind(this)}
                onFocusChange={this.handleFocusChange.bind(this, todo.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
