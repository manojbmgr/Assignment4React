import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
const InputTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit} className="d-flex gap-2">
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
          className="flex-grow-1"
          style={{ height: "50px", fontSize: "18px" }}
        />
        <Button variant="primary" type="submit" style={{ height: "50px" }}>
          Add
        </Button>
      </Form>
    </Container>
  );
};
export default InputTodo;
