import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import style from './style.module.css'

export default function TodoList({todos}) {
  return (
    <div className={style.list}>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </div>
  )
}

