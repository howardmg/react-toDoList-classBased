import React from "react";

class ToDoItem extends React.Component {
  render() {
    const handleSetSingleTodo = (e) => {
      return this.props.setSingleTodo(e);
    };

    return (
      <div className="todoItem">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={this.props.todo.completed}
        />
        <h1 onClick={handleSetSingleTodo} id={this.props.todo.id}>
          {this.props.todo.title}
        </h1>
      </div>
    );
  }
}

export default ToDoItem;

// className="toDoItem"
// id={this.props.elem.id}
// onClick={handleSetSingleTodo}
