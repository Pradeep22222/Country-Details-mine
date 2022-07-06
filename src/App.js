import { SearchForm } from "./Components/SearchForm";
import { Container } from "react-bootstrap";
import { fetchCountryInfo } from "./Helpers/axios";
import { CountryDetails } from "./Components/CountryDetails";
import { useState } from "react";

function App() {
  const [countryDetails, setCountryDetails] = useState({});
  const handleOnCountrySubmit = async (str) => {
    const result = await fetchCountryInfo(str);
    setCountryDetails(result);
    console.log(countryDetails);
  };
  let country;
  return (
    <div className="App">
      <Container>
        <SearchForm
          country={country}
          handleOnCountrySubmit={handleOnCountrySubmit}
        ></SearchForm>
        <br />
        <CountryDetails
          country={country}
          countryDetails={countryDetails}
        ></CountryDetails>
      </Container>
    </div>
  );
}

export default App;
