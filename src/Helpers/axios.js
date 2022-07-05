import axios from "axios";
const apiEndPoint = "https://restcountries.com/v3.1/name/";
export const fetchCountryInfo = async (country) => {
  try {
    const url = apiEndPoint + country;
    const { data } = await axios.get(url);
    console.log(data[0]);
    return data;
  } catch (err) {
    return { status: "error", message: err.message };
  }
};
