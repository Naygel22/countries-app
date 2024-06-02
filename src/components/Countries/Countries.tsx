import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../../api/getAllCountries";
import { CountryCard } from "../CountryCard/CountryCard";
import styles from "./Countries.module.css";
import { useState, useEffect } from "react";
import { SearchForm } from "../SearchForm/SearchForm";
import { SelectInputFilter } from "../SelectInputFilter/SelectInputFilter";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export const Countries = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries
  });

  const [filteredCountries, setFilteredCountries] = useState([]);

  const onSearch = (searchItem) => {
    const filtered = data.filter(country =>
      country.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const formik = useFormik({
    initialValues: {
      region: ''
    },
    onSubmit: (values) => {
      if (values.region) {
        const filtered = data.filter(country => country.region === values.region);
        setFilteredCountries(filtered);
      } else {
        setFilteredCountries(data);
      }
    }
  });

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
        <form onSubmit={formik.handleSubmit}>
          <SelectInputFilter formik={formik} accessor="region" label="Choose a region" options={uniqueRegions} />
          <button type="submit">Submit</button>
        </form>
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
