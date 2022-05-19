import { ADD_TODO, CHANGE_STATUS, EDIT_TODO, GET_TODO } from "../types/types";
import axios from "axios";

export const getTodo = (todo) => ({
  type: GET_TODO,
  payload: todo
})

export const addTodo = (todo) => async (dispatch) => {
  await axios.post(`/api/v1/todo`, todo)
  dispatch({ type: ADD_TODO, payload: todo })

}

export const getTodoFromServer = () => async (dispatch) => {
  const todo = await axios(`/api/v1/todo`)
  dispatch(getTodo(todo.data))
}

export const editTodo = (todo) => async (dispatch) => {
  await axios.put(`/api/v1/todo/edit`, todo)
  dispatch({ type: EDIT_TODO, payload: todo })

}

export const changeStatus = (id, todoStatus) => async (dispatch) => {
  dispatch({ type: CHANGE_STATUS, payload: { id, status: todoStatus } })
  await axios.post(`/api/v1/todo/changeStatus/${id}`, { status: todoStatus })
}
