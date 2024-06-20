import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import FAQList from './components/FAQList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Container>
      <Header />
      <Row>
        <Col>
          <FAQList/>
        </Col>
      </Row>
    </Container>
  </Provider>
);

export default App;
