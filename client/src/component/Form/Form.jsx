import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTodo, editTodo } from '../redux/actions/todosAC'
import style from './style.module.css'


export default function Form({ isEdit, setIsedit, todo = {} }) {
  const [input, setInput] = useState({ name: '', email: '', title: '' })
  const dispatch = useDispatch()

  const navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(todo).length) {
      setInput(todo)
    }


  }, [])

  const inputChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const hadleSubmit = (e) => {
    e.preventDefault()
    if (isEdit) {
      setInput(prev => ({ ...prev, id: todo.id }))
      console.log(input);
      dispatch(editTodo(input))
      setIsedit(false)
    } else {
      console.log(input);
      dispatch(addTodo(input))
      navigate('/')
    }
  }



  return (

    <div className={style.form}>
      <form onSubmit={hadleSubmit} className="needs-validation" novalidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input name='name' value={input.name} onChange={inputChange} className="form-control" id="name" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name='email' type="email" value={input.email} onChange={inputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input name='title' value={input.title} onChange={inputChange} className="form-control" id="title" required />
          <div className="valid-feedback">
            Looks good!
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
