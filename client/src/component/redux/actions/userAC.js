import axios from "axios"
import { SET_USER } from "../types/types"

export const setUser = (value) => {
  return {
    type: SET_USER,
    payload: value
  }

}


export const signInUser = (input) => async (dispatch) => {
  const res = await axios.post('/api/v1/auth/signin', input)
  dispatch(setUser(res.data.user))
}

export const userLogout = () => async (dispatch) => {
  try {
    await axios.post('/api/v1/auth/logout')
    dispatch(setUser(null))

  } catch (error) {

  }
}

export const checkUser = () => async (dispatch) => {

  try {
    const res = await axios.post('/api/v1/auth/check')

    dispatch(setUser(res.data.user))

  } catch (error) {

    dispatch(setUser(null))

  }
}
