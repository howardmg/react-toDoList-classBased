import React from 'react';
import Loading from './components/Loading';
import Todos from './components/Todos';
import SingleTodo from './components/SingleTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: null,
      singleTodo: null,
      loading: true,
      loadingMessage: "app is loading..." || props,
      completed: false
    };
}

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => { 
        console.log(data)
        this.setState({
          todos: data,
          loading: false
        });
      });
  }

  render() {

    const setSingleTodo = (e) => {
        let eID = e.target.id;
        console.log(eID)
        fetch(`https://jsonplaceholder.typicode.com/todos/${eID}`)
        .then((res) => res.json())
        .then((singleData) => this.setState({
          singleTodo: singleData,
          todos: null
        }));
    }

    const setFullTodoList = (e) => {
      fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => { 
        this.setState({
          todos: data,
          loading: false
        });
      });
    }

    if(this.state.loading) {
      return <Loading loadingMessage={this.state.loadingMessage} />
    } else if (this.state.todos) {
      return <Todos todos={this.state.todos} setSingleTodo={setSingleTodo} />;
    } else if (this.state.singleTodo) {
      return <SingleTodo singleTodo={this.state.singleTodo} setFullTodoList={setFullTodoList}/>
    }
  }
    
}

export default App;
