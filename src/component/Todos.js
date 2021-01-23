import React from "react";
import { connect } from "react-redux";
import { todosActions } from "../actions/todos.actions";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", newTodo: ["task 1", "task two"] };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // this.props.todosActions.addTodo(this.state.input);
    this.props.dispatch(todosActions.addTodo(this.state.input));

    this.setState({ input: "" });
  };
  addTodoList = (todoList) => {
    return (
      todoList &&
      todoList.map((item, i) => {
        return <li key={i}>{item}</li>;
      })
    );
  };

  componentWillReceiveProps = (nextprops) => {
    console.log("-----", nextprops);

    if (nextprops && nextprops.newTodo) {
      var arr = [...this.state.newTodo];
      arr.push(nextprops.newTodo);
      this.setState({
        newTodo: arr,
      });
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
        <ul>{this.addTodoList(this.state.newTodo)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { addTodo } = state;
  return {
    newTodo: addTodo.newTodo,
  };
}

const connectedAddTodo = connect(mapStateToProps)(Todos);
export { connectedAddTodo as Todos }; // export default AddTodo;
