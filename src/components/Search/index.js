import styled from "styled-components";
import { Form, FormControl, Container } from "react-bootstrap";

const ContainerS = styled.div`
  background-color: #FF0000;
  padding: 0.5rem 0;
  button {
    background-color: #B22222;
    border: size;
    font-size: 2.5rem;
    color: #B22222;
  }
`;
export const Search = () => {
  return (
    <ContainerS>
      <Container>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Procure Aqui"
            className="me-2"
            arial-label="Search"
          />
          <button type="submit" />
        </Form>
      </Container>
    </ContainerS>
  );
};
