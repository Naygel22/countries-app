import { useParams } from "react-router-dom";
import { getCountryByName } from "../../api/getCountryByName";
import { useQuery } from "@tanstack/react-query";
import { CountryByNameCard } from "../CountryByNameCard/CountryByNameCard";
import { CountryData } from "../Countries/Countries";


export const CountryByName = () => {
  const params = useParams<{ name: string }>();
  const { data, isLoading, error } = useQuery<CountryData[]>({
    queryKey: ["country", params.name],
    queryFn: () => getCountryByName(params.name)
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>No data...</p>;
  }

  return (
    <CountryByNameCard oneCountryData={data} />
  );
}
