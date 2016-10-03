import React, { Component, PropTypes } from "react";
import _ from "underscore";

export default class TodoListItem extends Component {
  componentDidMount() {
    if (this.props.focused) {
      this.inputEl.focus();
    }
  }

  delegateOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
  }

  delegateOnChange(e) {
    this.props.onType(e.target.value);
  }

  render() {
    const { id, text, checked, ...props } = this.props;
    const className = !text ? "is-new" : checked ? "done" : "";
    return (
      <li className={`todo-item ${className} ${props.focused ? "focused" : ""}`}>
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
            onFocus={props.onFocusChange.bind(this, true)}
            onBlur={props.onFocusChange.bind(this, false)}
            ref={(el) => this.inputEl = el}
          />
        </form>
      </li>
    );
  }
}

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  focused: PropTypes.bool,
  onCheck: PropTypes.func,
  onType: PropTypes.func,
  onSubmit: PropTypes.func,
  onFocusChange: PropTypes.func,
};
