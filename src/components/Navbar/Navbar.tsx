import { Home } from "@mui/icons-material"
import { Button } from "@mui/material"
import styles from "./Navbar.module.css"
import { useNavigate } from "react-router-dom"


export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.navbar}>
      <div className={styles.homeSection}>
        <span className={styles.homeIcon} onClick={() => navigate('/')}><Home fontSize="large" /></span>
        <div className={styles.title}>Where in the world?</div>
      </div>
    </div>
  )
}
