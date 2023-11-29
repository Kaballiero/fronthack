import logo from './logo.svg'
import styles from './styles.module.scss'



const Footer = () =>{
    return(
        <div className={styles.footer}>
            <div className={styles.company}>
                <div className={styles.logo}>
                    <img src={logo}/>
                </div>

                <h1 className={styles.title}>© MLS SFEDU ICTIS, 2023</h1>
            </div>
            
            <div className={styles.contact}>
                <h1 className={styles.contact_text}>
                    Связаться с нами:<br/>
                    meowmeow@sfedu.ru<br/>
                    +7 (988) 515 34 20
                </h1>
            </div>
        </div>
    )
}

export default Footer