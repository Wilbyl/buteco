import { ContainerS } from "../../components/ContainerForm";
import { PageTitle } from "../../components/pagedTitle";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputUser = {
      firstName,
      email,
      birthdate: new Date(birthdate).toJSON(),
      password,
      passwordConfirmation,
    };

    console.log(inputUser);

    axios
      .post("/user", inputUser)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <ContainerS>
      <PageTitle>Criar uma conta</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col}>
          <Form.Label>Digite um email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            onChange={(event) => setBirthdate(event.target.value)}
          />
        </Form.Group>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Confirmação da senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmação da senha"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Criar
        </Button>
      </Form>
    </ContainerS>
  );
};
