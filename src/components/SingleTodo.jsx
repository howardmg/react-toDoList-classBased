import React from "react";

class SingleTodo extends React.Component {
  render() {
    const handleBackButton = (e) => {
      return this.props.setFullTodoList(e);
    };

    return (
      <>
        <p className="singleItem">{this.props.singleTodo.title}</p>
        <button className="btn" onClick={handleBackButton}>
          Back
        </button>
      </>
    );
  }
}

export default SingleTodo;
