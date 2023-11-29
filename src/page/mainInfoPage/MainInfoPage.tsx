import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import Menu from "../../component/menu/Menu"
import Container from "../../component/container/Container"
import MainInfo from "../../component/mainInfo/mainInfo"

import styles from './styles.module.scss'


const MainInfoPage=()=>{
    return(
        <div className={styles.userPage}>
            <div>
                <Header/>
                <div className={styles.container}>
                    <Menu select={0} />
                    <Container element={MainInfo} sel={0} />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainInfoPage