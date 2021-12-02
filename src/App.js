import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

const initialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Desc del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Desc del Todo #2",
    completed: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const todoDelete = (todoId) => {
    const changeTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changeTodos);
  };

const todoToogleCompleted = (todoId) => {

//1 forma
 /*  const changedTodos = todos.map(todo => {

    const todoEdit = {
      ...todo,
      completed: !todo.completed
    }

    if(todo.id === todoId) {
      return todoEdit
    }
    else {
     return todo
    }

  }) */

//2 forma
/* const changedTodos = todos.map(todo => (
  todo.id === todoId
  ? {...todo, completed: !todo.completed}
  : todo
)) */

//3 forma
const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo )

setTodos(changedTodos)

}


const todoAdd = (todo) => {

  const newTodo = {
    id: Date.now(),
    ...todo,
    completed:false
  }

  const changedTodos = [
    newTodo,
    ...todos
  ]

  setTodos(changedTodos)
}


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList todos={todos} todoDelete={todoDelete} 
          todoToogleCompleted={todoToogleCompleted}
          />
        </div>
        <div className="col-4">
          <TodoForm todoAdd={todoAdd} />
        </div>
      </div>
    </div>
  );
};

export default App;
