import { Navbar, Container, Nav,NavDropdown, Form} from "react-bootstrap";
import {Search} from "../../components/Search"
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
          <Nav.Link href="#action3">Mesa</Nav.Link>
          <NavDropdown title="Categorias" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#bebida">Bebidas</NavDropdown.Item>
            <NavDropdown.Item href="#pratos">Pratos</NavDropdown.Item>
            <NavDropdown.Item href="#petiscos">Petiscos</NavDropdown.Item>
            <NavDropdown.Item href="#sucos">Sucos</NavDropdown.Item>
            <NavDropdown.Item href="#tabacaria">Tabacaria</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Especias
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            Categoria
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Search/>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};
