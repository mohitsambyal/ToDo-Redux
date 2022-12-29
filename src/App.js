import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const todoData = useSelector((state) => state.Todo);
  const { todos } = todoData;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  const removeHandler = (data) => {
    dispatch(RemoveTodoAction(data));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            style={{
              width: 350,
              padding: 10,
              borderRadius: 10,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
          >
            Go
          </button>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {todos &&
              todos.map((item) => (
                <li key={item.id}>
                  <span>{item.todo}</span>
                  <button
                    style={{
                      padding: 10,
                      borderRadius: 25,
                      fontSize: 15,
                      marginLeft: 20,
                      border: "1px solid white",
                      color: "white",
                      backgroundColor: "#e44444",
                    }}
                    onClick={() => removeHandler(item)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
