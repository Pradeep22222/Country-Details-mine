import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const SearchForm = ({ setCountries, setString, str }) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Form onSubmit={setCountries}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Country"
              onChange={(e) => {
                setString(e);
              }}
              value={str}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
