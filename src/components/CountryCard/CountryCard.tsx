import styles from './CountryCard.module.css'


export type CountryCardProps = {
  imgSrc: string,
  name: string,
  population: string,
  region: string,
  capital: string
}


export const CountryCard = ({ imgSrc, name, population, region, capital }: CountryCardProps) => {

  return (
    <div className={styles.countryCard}>
      <img src={imgSrc} alt={name} />
      <div className={styles.countryCardInfo}>
        <div className={styles.countryCardName}>{name}</div>
        <div >Population: {population}</div>
        <div>Region: {region}</div>
        <div>Capital: {capital}</div>
      </div>
    </div>
  )
}