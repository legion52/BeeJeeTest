import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoFromServer } from '../redux/actions/todosAC'
import TodoList from '../TodoList/TodoList'
import style from './style.module.css'

export default function Main() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  // console.log(todos);
  useEffect(() => {
    dispatch(getTodoFromServer())
  }, [])
  return (
    <div className={style.wrapper}>
      {todos && <TodoList todos={todos}/>}
      
    </div>
  )
}

