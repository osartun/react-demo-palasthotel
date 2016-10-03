import React from "react";
import _ from "underscore";

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <ul>
          <li>
            <input
              type="text"
              placeholder="New List Item"
            />
          </li>
        </ul>
      </div>
    );
  }
}
