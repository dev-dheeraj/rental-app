import { todosConstants } from "../constants/todos.constants";

export const addTodo = (state = {}, action) => {
  switch (action.type) {
    case todosConstants.TODO_REQUEST:
      return {
        loading: true,
      };
    case todosConstants.TODO_SUCCESS:
      return {
        newTodo: action.newTodo,
      };
    case todosConstants.TODO_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};
