const addTodo = (addTodo) => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log("----services----", json);
      return json;
    });
};

export const todosServices = {
  addTodo,
};
