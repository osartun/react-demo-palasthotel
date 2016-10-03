import React, { Component } from "react";
import _ from "underscore";

export default class TodoListItem extends Component {
  delegateOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
  }

  render() {
    return (
      <li key={this.props.id}>
        <form onSubmit={this.delegateOnSubmit.bind(this)}>
          <input
            className={this.props.text ? "show" : "hidden"}
            type="checkbox"
            checked={this.props.checked}
            onChange={this.handleCheck.bind(this, this.props.id)}
          />
          <input
            type="text"
            value={this.props.text}
            placeholder="New List Item"
            onChange={this.handleType.bind(this, this.props.id)}
          />
        </form>
      </li>
    );
  }
}
