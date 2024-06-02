import { getAllCountries } from "./getAllCountries";

export const getCountryByName = async (countryName: string) => {
  const data = await getAllCountries()
  const country = data.find(country => country.name.toLowerCase() === countryName.toLowerCase());
  if (country) {
    console.log(country)
    return country;
  } else {
    alert("Wrong country")
  }
}



