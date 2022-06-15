import React from "react";
import ToDoItem from "./ToDoItem";

class Todos extends React.Component {
  render() {
    //return console.log(this.props);
    return (
      <div className="container">
        {this.props.todos.map((elem) => {
          //   <ToDoItem todo={elem} />;
          return (
            <ToDoItem
              todo={elem}
              key={elem.id}
              setSingleTodo={this.props.setSingleTodo}
            />
          );
        })}
      </div>
    );
  }
}

export default Todos;
