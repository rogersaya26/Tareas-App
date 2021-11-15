import React from 'react'

const TodoList = () => {
  return (
    <div>
      <h1>Soy TodoList</h1>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-right">Titulo de la Tarea</h3>
          <p className="card-text text-right">Descripción de la tarea</p>
          <hr />
          <div className="d-flex">
          <button className="btn btn-sm btn-primary mr-2">Editar</button>
          <button className="btn btn-sm btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
