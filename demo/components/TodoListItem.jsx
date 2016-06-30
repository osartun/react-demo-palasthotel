import React, { Component, PropTypes } from "React";
import _ from "underscore";

export default class TodoListItem extends Component {
  delegateOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  delegateOnChange(e) {
    this.props.onType(this.props.id, e.target.value);
  }

  componentDidMount() {
    if (this.props.focused) {
      this.inputEl.focus();
    }
  }

  render() {
    const {id, text, checked, ...props} = this.props;
    const className = !text ? "is-new" : checked ? "done" : "";
    return (
      <li className={`todo-item ${props.focused ? "focused" : ""} ${className}`}>
        <form onSubmit={this.delegateOnSubmit.bind(this)}>
          <input
            className={text ? "show" : "hidden"}
            type="checkbox"
            checked={checked}
            onChange={props.onCheck.bind(this, id)}
          />
          <input
            type="text"
            value={text}
            placeholder="New List item"
            onFocus={props.onFocusChange.bind(this, id, true)}
            onBlur={props.onFocusChange.bind(this, id, false)}
            onChange={this.delegateOnChange.bind(this)}
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
  onCheck: PropTypes.func.isRequired,
  focused: PropTypes.bool,
};













