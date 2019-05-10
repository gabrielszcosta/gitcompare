import React from 'react';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import logo from '../../assets/logo.png';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />
    <Form action="">
      <input type="text" placeholder="usuário/repositório" />
      <button type="submit">Ok</button>
    </Form>
    <CompareList />
  </Container>
);

export default Main;
