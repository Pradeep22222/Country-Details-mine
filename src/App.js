import { SearchForm } from "./Components/SearchForm";
import { Container } from "react-bootstrap";
import { fetchCountryInfo } from "./Helpers/axios";
import { CountryDetails } from "./Components/CountryDetails";
import { useState, useEffect } from "react";

function App() {
  const [str, setStr] = useState("");
  const [country, setCountry] = useState();

  const setString = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setStr(value);
  };

  const setCountries = (e) => {
    e.preventDefault();
    setCountry(str);
    fetchCountryInfo(country);
    console.log(country);
  };

  return (
    <div className="App">
      <Container>
        <SearchForm
          setCountries={setCountries}
          setString={setString}
          str={str}
        ></SearchForm>
        <br />
        <CountryDetails></CountryDetails>
      </Container>
    </div>
  );
}

export default App;
