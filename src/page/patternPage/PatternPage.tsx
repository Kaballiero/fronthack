import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import Menu from "../../component/menu/Menu"
import Container from "../../component/container/Container"
import Pattern from "src/component/pattern/Pattern"

import styles from './styles.module.scss'


const PatternPage=()=>{
    return(
        <div className={styles.patternPage}>
            <div>
                <Header/>
                <div className={styles.container}>
                    <Menu select={3} />
                    <Pattern/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PatternPage