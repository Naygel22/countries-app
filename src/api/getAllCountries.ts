import { CountryData } from "../components/Countries/Countries";

export const getAllCountries = async (): Promise<CountryData[]> => {
  const response = await fetch("data.json")
  if (!response.ok) {
    return [];
  }
  const data = await response.json()
  return data;
}
