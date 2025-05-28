import { TodoProvider } from "./TodoContext";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import AppNavbar from "./components/Navbar";
import { Container } from "react-bootstrap";
function App() {
  return (
    <TodoProvider>
      <AppNavbar />
      <Container className="mt-5 text-center">
        <InputTodo />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}
export default App;
