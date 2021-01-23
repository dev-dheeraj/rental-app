import { todosConstants } from "../constants/todos.constants";
import { todosServices } from "../services/todos.services";

const addTodo = (addData) => {
  return (dispatch) => {
    dispatch(request({ addData }));

    // var newData = todosServices.addTodo(addData);
    // dispatch(success(newData));

    todosServices.addTodo(addData).then(
      (newTodo) => {
        dispatch(success(addData));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
  function request(todo) {
    return { type: todosConstants.TODO_REQUEST, todo };
  }
  function success(newTodo) {
    return { type: todosConstants.TODO_SUCCESS, newTodo };
  }
  function failure(error) {
    return { type: todosConstants.TODO_FAILURE, error };
  }
};

export const todosActions = {
  addTodo,
};
