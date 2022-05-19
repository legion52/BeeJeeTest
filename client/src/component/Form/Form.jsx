import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addTodo, editTodo } from '../redux/actions/todosAC'
import style from './style.module.css'


export default function Form({ isEdit, setIsedit, todo = {} }) {
  const [input, setInput] = useState(Object.keys(todo).length ? todo : { name: '', email: '', title: '' })
  const [message, setMessage] = useState(false)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  useEffect(() => {
    if (isEdit) {

    }
  }, [input])

  const inputChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value, }))
  }
  const hadleSubmit = (e) => {
    e.preventDefault()
    if (isEdit) {
      let inputChange = {}
      if (input.title !== todo.title) {
        inputChange = { changed: true }
      }
      dispatch(editTodo({ ...input, ...inputChange }))
      setIsedit(false)
    } else {
      dispatch(addTodo(input))
      setMessage(true)
      setTimeout(() => {
        navigate('/')
      }, 500)
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
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input name='title' value={input.title} onChange={inputChange} className="form-control" id="title" required />
          <div className="valid-feedback">
            Looks good!
          </div>

          {message &&
            <div className={style.message}><p>Задача добавлена!</p></div>}
        </div>
        <button type="submit" className="btn btn-primary">Сохранить</button>
      </form>
    </div>
  )
}
