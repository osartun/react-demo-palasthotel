import React, { Component } from "react";
import _ from "underscore";

export default class TodoListItem extends Component {
  delegateOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
  }

  render() {
    const { id, text, checked, ...props } = this.props;
    return (
      <li key={id}>
        <form onSubmit={this.delegateOnSubmit.bind(this)}>
          <input
            className={text ? "show" : "hidden"}
            type="checkbox"
            checked={checked}
            onChange={this.handleCheck.bind(this, id)}
          />
          <input
            type="text"
            value={text}
            placeholder="New List Item"
            onChange={this.handleType.bind(this, id)}
          />
        </form>
      </li>
    );
  }
}
