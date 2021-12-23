import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

const initialTodos = [
  {
    id: 1,
    title: "Dormir Bien",
    description: "Acostarme a las 10 pm dormir 10 horas reglamentaria. Colocar despertador a las 8 am.",
    completed: false,
  },
  {
    id: 2,
    title: "Hacer Mercado Coto",
    description: "-1 Mapple Huevos -1 Lts Aceite Girasol -5 kg Fideos -3 kg Arroz -1 3lts CocaCola",
    completed: true,
  },
];

const localTodos = JSON.parse(localStorage.getItem('todos'))

const App = () => {
  const [todos, setTodos] = useState(localTodos || initialTodos)
  const [todoEdit, setTodoEdit] = useState(null)

useEffect (() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])



  const todoDelete = (todoId) => {

    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }

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


const todoUpdate = (todoEdit) => {
const changedTodos = todos.map(todo => (
  todo.id === todoEdit.id ? todoEdit : todo
))
  setTodos(changedTodos)
}

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList 
          todos={todos} 
          todoDelete={todoDelete} 
          todoToogleCompleted={todoToogleCompleted}
          setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm 
          todoEdit={todoEdit}
          todoAdd={todoAdd}
          todoUpdate={todoUpdate}
          setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
