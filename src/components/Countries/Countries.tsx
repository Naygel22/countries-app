import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../../api/getAllCountries";
import { CountryCard } from "../CountryCard/CountryCard";
import styles from "./Countries.module.css";
import { useState, useEffect } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { SelectInputFilter } from "../SelectInputFilter/SelectInputFilter";
import { Link } from "react-router-dom";
import { language } from "../CountryByName/types";

export type CountryData = {
  name: string,
  flag: string,
  population: string,
  region: string,
  capital: string,
  subregion: string,
  currencies: Array<{ name: string }>,
  nativeName: string,
  topLevelDomain: string,
  languages: Array<language>,
  borders: Array<string>,
  alpha3Code: string
}

export const Countries = () => {
  const { data, isLoading, error } = useQuery<CountryData[]>({
    queryKey: ["countries"],
    queryFn: getAllCountries
  });

  const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([]);


  const onSearch = (searchItem: string) => {
    const filtered = data?.filter(country =>
      country.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredCountries(filtered || []);
  };



  useEffect(() => {
    if (data) {
      setFilteredCountries(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  const regions = data.map(country => country.region);
  const uniqueRegions = regions.filter((region, index) => regions.indexOf(region) === index).map(region => ({
    value: region,
    label: region
  }));

  return (
    <>
      <div className={styles.searchAndFilterBars}>
        <SearchForm onSearch={onSearch} />
        <SelectInputFilter label="Change region" options={uniqueRegions} onChange={(region) => {
          if (region) {
            const filtered = data.filter(country => country.region === region);
            setFilteredCountries(filtered);
          } else {
            setFilteredCountries(data);
          }
        }} />
      </div>
      <div className={styles.countries}>
        {filteredCountries.map((country) => (
          <div key={country.name}>
            <Link to={`/${country.name}`}>
              <CountryCard
                imgSrc={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
