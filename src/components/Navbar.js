import { Navbar, Container } from "react-bootstrap";
const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand className="mx-auto">To-Do List App Using localStorage</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;
