import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export const CountryDetails = ({ countryDetails, country }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={countryDetails?.flags?.png} />
        <Card.Body>
          <Card.Title> {country} </Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Capital City: {countryDetails.capital}
            </ListGroup.Item>
            <ListGroup.Item>
              population: {countryDetails.population}
            </ListGroup.Item>
            <ListGroup.Item>Area: {countryDetails.area}</ListGroup.Item>
            <ListGroup.Item>
              languages:
              {countryDetails?.languages &&
                countryDetails?.languages[
                  Object.keys(countryDetails?.languages)[0]
                ]}
            </ListGroup.Item>
          </ListGroup>

          {/* <Card.Text>
            It falls in {countryDetails?.continents[0]} continent. Its currency
            is called
            {
              countryDetails?.currencies[
                Object.keys(countryDetails.currencies)[0]
              ][0]
            }
          </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  );
};
