import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../../api/getAllCountries";
import { CountryCard } from "../CountryCard/CountryCard";
import styles from "./Countries.module.css";
import { useState, useEffect } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { SelectInputFilter } from "../SelectInputFilter/SelectInputFilter";
import { useFormik } from "formik";

export const Countries = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries
  });

  const [filteredCountries, setFilteredCountries] = useState([]);

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

  const onSearch = (searchItem: string) => {
    const filtered = data.filter(country =>
      country.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredCountries(filtered);
    console.log(data.find(country => country.name.common === searchItem))
  };

  const formik = useFormik({
    initialValues: {
      region: ''
    },
    onSubmit: (values) => console.log(values)
  })



  return (
    <>
      <SearchForm onSearch={onSearch} />
      <SelectInputFilter formik={formik} accessor="region" label="Choose a region" options={data} />
      <div className={styles.countries}>
        {filteredCountries.map((country) => (
          <div key={country.id}>
            <CountryCard
              imgSrc={country.flag}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </div>
        ))}
      </div>
    </>
  );
};
