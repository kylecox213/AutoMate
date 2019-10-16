import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

function Homepage() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>This is the homepage of the app</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
