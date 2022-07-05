import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const SearchForm = ({ handleOnMovieSubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setStr(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnMovieSubmit(str);
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <Form onSubmit={handleOnSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Country"
              onChange={handleOnChange}
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
