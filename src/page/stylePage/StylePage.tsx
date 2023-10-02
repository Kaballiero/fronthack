import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import Menu from "../../component/menu/Menu"
import Container from "../../component/container/Container"
import Style from "src/component/style/Style"

import styles from './styles.module.scss'


const StylePage=()=>{
    return(
        <div className={styles.stylePage}>
            <div>
                <Header/>
                <div className={styles.container}>
                    <Menu select={0} />
                    <Container element={Style} sel={2} />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default StylePage