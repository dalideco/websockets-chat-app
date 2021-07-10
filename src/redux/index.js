import { messagesReducer, inputsReducer } from "./reducers";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({messages: messagesReducer, inputs:inputsReducer})

const store = createStore(reducer);

export default store;