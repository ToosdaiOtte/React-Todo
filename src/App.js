import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

const todos = [
  {
    task: "Learn React",
    id: 101,
    completed: false
  },
  {
    task: "Learn Class Components",
    id: 102,
    completed: false
  },
  {
    task: "Create React Todo List",
    id: 103,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos //todos: todos
    };
  }

  addTask = (e, taskName) => {
    e.preventDefault();
    const existing = this.state.todos.filter(
      task => task.task === taskName
    );
    if(existing.length === 0){
      const newTask = {
        task: taskName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTask]
      });
    }
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    });
  };

  toggleTask = taskId => {
    console.log("index.js: App: toggleTask: ", taskId);
    console.log("index.js: App: this.state: ", this.state);

    this.setState({
      todos: this.state.todos.map(task => {
        if(task.id === taskId){
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    });
  };

  render(){
    console.log("rendering...");
    return(
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;