import { Navbar, Container, Nav, Form} from "react-bootstrap";
export const NavbarS = () => {
  return (
    <Navbar bg="danger" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#">Buteco</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/mesa">Mesa</Nav.Link>
        </Nav>
        <Form className="d-flex">
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
