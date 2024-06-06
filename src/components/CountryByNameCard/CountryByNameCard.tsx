import styles from './CountryByNameCard.module.css';
import { language } from '../CountryByName/types';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { CountryData } from '../Countries/Countries';
import { getAllCountries } from '../../api/getAllCountries';
import { useQuery } from '@tanstack/react-query';


export const CountryByNameCard = ({ oneCountryData }: { oneCountryData: CountryData }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery<CountryData[]>({
    queryKey: ["countries"],
    queryFn: getAllCountries
  });

  const currentBorders = oneCountryData.borders || [];
  console.log(currentBorders)

  const borderCountries = data?.filter(country => currentBorders.includes(country.alpha3Code)) || [];
  console.log(borderCountries)


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>No data</p>;
  }

  return (
    <>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        <BsArrowLeft className={styles.arrowIcon} />
        Back
      </button>
      <div className={styles.countryArea}>
        <img className={styles.countryFlag} src={oneCountryData.flag} alt={`${oneCountryData.name} flag`} />
        <div className={styles.description}>
          <div className={styles.countryTitle}>{oneCountryData.name}</div>
          <div className={styles.countryInfo}>
            <div className={styles.firstColumn}>
              <div><b>Native Name:</b> {oneCountryData.nativeName}</div>
              <div><b>Population:</b> {oneCountryData.population}</div>
              <div><b>Region:</b> {oneCountryData.region}</div>
              <div><b>Sub Region:</b> {oneCountryData.subregion}</div>
              <div><b>Capital:</b> {oneCountryData.capital}</div>
            </div>
            <div className={styles.secondColumn}>
              <div><b>Top Level Domain:</b> {oneCountryData.topLevelDomain}</div>
              <div><b>Currencies:</b> {oneCountryData.currencies[0].name}</div>
              <div><b>Languages:</b> {oneCountryData.languages.map((language: language) => language.name).join(', ')}</div>
            </div>
          </div>
          <div>
            <b>Border Countries:</b>
            {borderCountries.length > 0
              ? borderCountries.map(borderCountry => <button key={borderCountry.alpha3Code} className={styles.borderButton} onClick={() => navigate(`/${borderCountry.name}`)}>{borderCountry.name}</button>)
              : ' None'}
          </div>
        </div>
      </div>
    </>
  );
};

