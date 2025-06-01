import { ListGroup, Button, Container } from "react-bootstrap";
const TodoList = ({ todos, deleteTodo, clearAllTodos }) => {
  return (
    <Container className="mt-4">
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex justify-content-between align-items-center p-3"
            style={{ borderRadius: "10px", fontSize: "18px" }}
          >
            {todo.text}
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {todos.length > 1 && (
        <Button
          variant="warning"
          className="mt-3 w-100"
          onClick={clearAllTodos}
          style={{ fontSize: "18px", padding: "10px", borderRadius: "10px" }}
        >
          Clear All
        </Button>
      )}
    </Container>
  );
};
export default TodoList;
