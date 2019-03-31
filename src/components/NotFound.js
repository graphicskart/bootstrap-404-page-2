import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class NotFound extends Component {
  render() {
    return (
      <Col xs={12} className="text-center">
        <Row>
          <Col xs={12}>
            <h1 className="heading">404</h1>
          </Col>
          <Col xs={12}>
            <p className="text">
              We can't seem to find the page you're looking for.
            </p>
          </Col>
          <Col xs={12}>
            <img src={require("../assets/img/img.png")} />
          </Col>
        </Row>
      </Col>
    );
  }
}
