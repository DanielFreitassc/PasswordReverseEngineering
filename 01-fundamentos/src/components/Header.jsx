import styles from "./Header.module.css"
import igniteLogo from "../assets/ignite-logo.svg"
export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo do ignite" />
            <strong >Ignite Feed</strong>
        </header>
        
    )
}