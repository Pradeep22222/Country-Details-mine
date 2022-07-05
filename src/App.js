import { SearchForm } from "./Components/SearchForm";
import { Container } from "react-bootstrap";
import { fetchCountryInfo } from "./Helpers/axios";
import { CountryDetails } from "./Components/CountryDetails";
import { useState } from "react";

function App() {
  const [countryDetails, setCountryDetails] = useState({});
  const handleOnMovieSubmit = async (str) => {
    const result = await fetchCountryInfo(str);
    setCountryDetails(result);
    console.log(countryDetails);
  };

  return (
    <div className="App">
      <Container>
        <SearchForm handleOnMovieSubmit={handleOnMovieSubmit}></SearchForm>
        <br />
        <CountryDetails></CountryDetails>
      </Container>
    </div>
  );
}

export default App;
