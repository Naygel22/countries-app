import { CountryData } from "../components/Countries/Countries";
import { getAllCountries } from "./getAllCountries";

export const getCountryByName = async (countryName?: string) => {
  if (!countryName) return;

  const data: CountryData[] = await getAllCountries()
  const country = data.find((country) => country.name.toLowerCase() === countryName.toLowerCase());
  if (country) {
    return country;
  }

  return undefined
}



