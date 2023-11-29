import { Link } from 'react-router-dom'

import logo from './logo.svg'
import styles from './styles.module.scss'

const Header = () =>{
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo}/>
            </div>
            
            <div className={styles.menu}>
                <p className={styles.menu_link}>
                    <Link to="/">Главная</Link>
                </p>
                <p className={styles.menu_link}>
                    <Link to="/lk/info">Личный кабинет</Link>
                </p>
                <p className={styles.menu_link}>
                    <Link to="/contact">О нас</Link>
                </p>
            </div>
        </div>
    )
}

export default Header