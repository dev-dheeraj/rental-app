import { combineReducers } from "redux";

import { addTodo } from "../reducer/todos.reducers";

const rootReducer = combineReducers({
  addTodo,
});

export default rootReducer;
