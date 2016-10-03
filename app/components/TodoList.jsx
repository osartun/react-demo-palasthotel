import React from "react";
import _ from "underscore";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World",
    };
  }

  handleType(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div className="todo-list">
        <ul>
          <li>
            <input
              type="text"
              value={this.state.text}
              placeholder="New List Item"
              onChange={this.handleType.bind(this)}
            />
          </li>
        </ul>
      </div>
    );
  }
}
