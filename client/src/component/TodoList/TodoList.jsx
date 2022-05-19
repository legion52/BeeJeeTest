import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination'
import Select from '../Select/Select'
import TodoItem from '../TodoItem/TodoItem'
import style from './style.module.css'

export default function TodoList({ todos, setCounter }) {

  const [currentPage, setCurrentPage] = useState(1)
  const [todoPerPage] = useState(3)
  const [todoSort, setTodoSort] = useState({ value: 'Без фильтра', descending: 'off' })
  const [allTodo, setAllTodo] = useState(todos)
  const lastTodoIndex = currentPage * todoPerPage
  const firstTodoIndex = lastTodoIndex - todoPerPage
  let currentTodo = allTodo.slice(firstTodoIndex, lastTodoIndex)

  const nextPage = () => {
    setCurrentPage(prev => prev + 1)
  }
  const previousPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  const onClickHandler = () => {
    setAllTodo(todos)

    switch (todoSort.value) {
      case 'По имени':
        setAllTodo(() => {
          return todoSort.descending === 'on' ? todos.sort((a, b) => a.name.localeCompare(b.name)).reverse() : todos.sort((a, b) => a.name.localeCompare(b.name))
        })
        break
      case 'По email':
        setAllTodo(() => {
          return todoSort.descending === 'on' ? todos.sort((a, b) => a.email.localeCompare(b.email)).reverse() : todos.sort((a, b) => a.email.localeCompare(b.email))
        })
        break
      case 'По статусу':
        setAllTodo(() => {
          let trueArr = []
          let falseArr = []
          for (let i = 0; i < todos.length; i++) {
            todos[i].status === true ? trueArr.push(todos[i]) : falseArr.push(todos[i])
          }
          return todoSort.descending === 'on' ? [...trueArr, ...falseArr].reverse() : [...trueArr, ...falseArr]
        })
        break
      default:
        break
    }


    setCounter(prev => prev + 1)


  }

  useEffect(() => {
    setAllTodo(todos)
    currentTodo = allTodo.slice(firstTodoIndex, lastTodoIndex)

  }, [todos])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className={style.list}>
      <Select onClickHandler={onClickHandler} todoSort={todoSort} setTodoSort={setTodoSort} />
      {currentTodo.length && currentTodo.map(todo => <TodoItem allTodo={allTodo} key={todo.id} todo={todo} />)}
      {todos.length > 3 && <Pagination currentPage={currentPage} paginate={paginate} todoPerPage={todoPerPage} totalTodos={todos.length} nextPage={nextPage} previousPage={previousPage} />}

    </div>
  )
}

