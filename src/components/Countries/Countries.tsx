import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../../api/getAllCountries";
import { CountryCard } from "../CountryCard/CountryCard";
import styles from "./Countries.module.css"

export const Countries = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries
  });

  if (!data) {
    return <p>No data...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }


  return (
    <div className={styles.countries}>
      {data.map((country) => (
        <div key={country.id}>
          <CountryCard
            imgSrc={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital} />
        </div>
      ))}
    </div>

  )
}