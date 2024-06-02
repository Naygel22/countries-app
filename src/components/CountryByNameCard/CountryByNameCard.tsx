import styles from './CountryByNameCard.module.css';
import { language } from '../CountryByName/types';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const CountryByNameCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        <BsArrowLeft className={styles.arrowIcon} />
        Back
      </button>
      <div className={styles.countryArea}>
        <img className={styles.countryFlag} src={data.flag} alt={`${data.name} flag`} />
        <div className={styles.description}>
          <div className={styles.countryTitle}>{data.name}</div>
          <div className={styles.countryInfo}>
            <div className={styles.firstColumn}>
              <div><b>Native Name:</b> {data.nativeName}</div>
              <div><b>Population:</b> {data.population}</div>
              <div><b>Region:</b> {data.region}</div>
              <div><b>Sub Region:</b> {data.subregion}</div>
              <div><b>Capital:</b> {data.capital}</div>
            </div>
            <div className={styles.secondColumn}>
              <div><b>Top Level Domain:</b> {data.topLevelDomain}</div>
              <div><b>Currencies:</b> {data.currencies[0].name}</div>
              <div><b>Languages:</b> {data.languages.map((language: language) => language.name).join(', ')}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
