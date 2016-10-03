import React, { Component } from "react";
import _ from "underscore";

export default class TodoListItem extends Component {
  render(todo) {
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
  }
}
