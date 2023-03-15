import { Link } from "react-router-dom"
import cn from "classnames"

import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"
import Menu from "../../component/menu/Menu"

import {UserIcon} from './icon/userIcon'
import {SecurityIcon} from './icon/securityIcon'
import {RateIcon} from './icon/rateIcon'
import { StyleIcon }from "./icon/styleIcon"
import styles from './styles.module.scss'

const btnArray =[
    {name: "Личная информация",
    link:"/user/lk",
    icon: UserIcon},
    {name: "Безопасность",
    link:"/user/security",
    icon: SecurityIcon},
    {name: "Стилизация",
    link:"/user/style",
    icon: StyleIcon},
    {name: "Безопасность",
    link:"/user/rate",
    icon: RateIcon},
]
const btnArr=[
    "Основная информация",
    "Взаимодействие с системой",
     "История запросов",
    "Шаблоны обработки"
]
   
function checkURLPath(path:string){
    const currentPath=window.location.pathname
    if(currentPath===path) return true
    return false
}


const UserPage=()=>{
    return(
        <div className={styles.userPage}>
            <div>
                <Header/>
                <div className={styles.container}>
                    <Menu select={0} btnName={btnArr} />
                    <div className={styles.content}>
                        <div className={styles.navbar}>
                            {btnArray.map((btn)=>(
                                <Link className={cn(styles.button, { [styles.button_activ]: checkURLPath(btn.link) })} to={btn.link}>
                                   <div className={styles.button_icon}><btn.icon/></div> 
                                   <p className={styles.button_text}> {btn.name}</p>
                                </Link>
                            ))}
                        </div>
                        
                        <div className={styles.info}>
                            <div className={styles.form_name}>
                                <p className={styles.form_label}>Имя пользователя</p>
                                <input type="text" className={styles.form_input} />
                            </div>

                            <div className={styles.form_contacts}>
                                <div className={styles.form_email}>
                                    <p className={styles.form_label}>Электронная почта</p>
                                    <input type="text" className={styles.form_input} />
                                </div>
                                <div className={styles.form_phone}>
                                    <p className={styles.form_label}>Номер телефона</p>
                                    <input type="text" className={styles.form_input} />
                                </div>
                            </div>
                            
                            <div className={styles.form_info}>
                                    <p className={styles.form_label}>Описание рода деятельности (необязательно)</p>
                                    <input type="text" className={styles.form_input_large} />
                            </div>

                            <div className={styles.form_btn}>
                                <button>Сохранить</button>
                                <button>Сбросить</button>
                        </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UserPage