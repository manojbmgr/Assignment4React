import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { Container } from "react-bootstrap";
const App = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const clearAllTodos = () => {
    setTodos([]);
  };
  return (
    <Container className="mt-4">
      <Navbar />
      <InputTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} clearAllTodos={clearAllTodos} />
    </Container>
  );
};
export default App;
