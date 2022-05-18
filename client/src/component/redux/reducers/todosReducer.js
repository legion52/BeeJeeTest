import { ADD_TODO, CHANGE_STATUS, EDIT_TODO, GET_TODO } from "../types/types";

export const todosReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case GET_TODO:
      return payload;
    case ADD_TODO:
      return [...state, payload]
    case EDIT_TODO:
      console.log('?????????????????');
      return state.map(el => el.id === payload.id ? el = payload : el)
    case CHANGE_STATUS:
      return state.map(el => el.id === payload.id ? {...el, ...payload }: el)

    default:
      return state;
  }

}
