import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../Form/Form'
import { changeStatus } from '../redux/actions/todosAC'
import style from './style.module.css'

export default function TodoItem({ todo }) {
  const [isEdit, setIsedit] = useState(false)

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const onClickHandler = () => {
    let todoStatus = todo.status
    todoStatus = !todoStatus
    dispatch(changeStatus(todo.id, todoStatus))
  }
  useEffect(() => {

  }, [isEdit])



  return (
    <div className="card my-5" >
      <div className={`card-body my-5`} >
        {!isEdit ? (
          <><div className={`${style.item} ${todo.status ? style.success : ''}`}>
            <p>{todo.name}</p>
            <p>{todo.email}</p>
          </div>
            <hr />
            <p>{todo.title}</p>
            {todo.changed && <div className={`${style.edit}`}>
              <p>изменено администратором*</p>
            </div>}
            {user && (<div>
              <hr />
              <button className={`btn btn-primary ${style.cardButton}`} onClick={() => setIsedit(true)}>Редактировать</button>
              <button className={`btn ${!todo.status ? 'btn-success' : 'btn-secondary'} ${style.cardButton}`} onClick={onClickHandler}>{!todo.status ? 'Выполнено' : 'Не выполнено'}</button>
            </div>)}
          </>) :
          (<div className={`${style.card}`}>
            <Form isEdit={isEdit} setIsedit={setIsedit} todo={todo} />
            <button className={`btn btn-dark ${style.cardButton}`} onClick={() => setIsedit(false)}>Отмена</button>
          </div>)}
      </div>
    </div >
  )
}
