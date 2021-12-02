import React, { useState } from "react";


const initialFormValues = {
  title: '',
  description: ''
}

const TodoForm = ({todoAdd}) => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const {title, description} = formValues

  const handleInputChange = (e) => {


    const changedFormValues = {

      ...formValues,
      [e.target.name] : e.target.value

    }

    setFormValues(changedFormValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    todoAdd(formValues)
  }

  return (
    <div>
      <h1>Nueva Tarea</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Titulo" className="form-control" value={title} name="title" onChange={handleInputChange} />
        <textarea placeholder="Descripcion" className="form-control mt-2" value={description} name="description" onChange={handleInputChange} />
        <button className="btn btn-primary btn-sm col-12 mt-2" >
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
