import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export const CountryDetails = ({ countryDetails, country }) => {
  return (
    <div>
      <Card style={{ width: "18rem", backgroundColor:"" }}>
        <Card.Img variant="top" src={countryDetails?.flags?.png} />
        <Card.Body>
          <Card.Title> {countryDetails?.name?.common} </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="capital_city">
              Capital City: {countryDetails.capital}
            </ListGroup.Item>
            <ListGroup.Item className="population">
              population: {countryDetails.population}
            </ListGroup.Item>
            <ListGroup.Item className="area">
              Area: {countryDetails.area}
            </ListGroup.Item>
            <ListGroup.Item className="language">
              languages:
              {countryDetails?.languages &&
                countryDetails?.languages[
                  Object.keys(countryDetails?.languages)[0]
                ]}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};
