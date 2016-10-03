import React, { Component } from "react";
import _ from "underscore";

export default class TodoListItem extends Component {
  delegateOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
  }

  delegateOnChange(e) {
    this.props.onType(e.target.value);
  }

  render() {
    const { id, text, checked, ...props } = this.props;
    return (
      <li>
        <form onSubmit={this.delegateOnSubmit.bind(this)}>
          <input
            className={text ? "show" : "hidden"}
            type="checkbox"
            checked={checked}
            onChange={props.onCheck}
          />
          <input
            type="text"
            value={text}
            placeholder="New List Item"
            onChange={this.delegateOnChange.bind(this)}
          />
        </form>
      </li>
    );
  }
}
