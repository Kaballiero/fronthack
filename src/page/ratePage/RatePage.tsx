import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import Menu from "../../component/menu/Menu"
import Container from "../../component/container/Container"
import Rate from "src/component/rate/rate"

import styles from './styles.module.scss'


const RatePage=()=>{
    return(
        <div className={styles.ratePage}>
            <div>
                <Header/>
                <div className={styles.container}>
                    <Menu select={0} />
                    <Container element={Rate} sel={3} />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RatePage