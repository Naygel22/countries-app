import { Home } from "@mui/icons-material"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.homeSection}>
        <Link to='/'><span className={styles.homeIcon}><Home fontSize="large" /></span></Link>
        <div className={styles.title}>Where in the world?</div>
      </div>
    </div>
  )
}
