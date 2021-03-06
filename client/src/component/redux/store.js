import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initState } from "./initState";


export const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))
