import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoFromServer } from '../redux/actions/todosAC'
import TodoList from '../TodoList/TodoList'

export default function Main() {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)
  const todos = useSelector(state => state.todos)
  useEffect(() => {
    dispatch(getTodoFromServer())
  }, [])
  return (
    <div>
      {todos.length ? <TodoList counter={counter} setCounter={setCounter} todos={todos} /> : <h3>Нет задач</h3>}

    </div>
  )
}

