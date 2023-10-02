import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import Menu from "../../component/menu/Menu"
import Container from "../../component/container/Container"
import Security from "../../component/security/Security"

import styles from './styles.module.scss'


const SecurityPage=()=>{
    return(
        <div className={styles.securityPage}>
            <div>
                <Header/>
                <div className={styles.container}>
                    <Menu select={0} />
                    <Container element={Security} sel={1} />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SecurityPage