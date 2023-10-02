

import { IMenu } from 'src/lib/entity'
import arrow from './arrow.svg'
import styles from './styles.module.scss'

export const MenuBtnMap=[
    {name:"Основная информация", link:"/lk/info"},
    {name:"Взаимодействие с системой",link:"/interact-with-system"},
    {name:"История запросов",link:"/request-history"},
    {name:"Шаблоны обработки",link:"/pattern"}
]

const Menu=(props:IMenu)=>{
    return(
        <div className={styles.menu}>
            {MenuBtnMap.map((btn,index)=>(
                <div className={styles.button}>
                    {index===props.select&&<img className={styles.button_arrow} src={arrow}/>}
                    <a className={styles.link} href={btn.link}>
                        <p className={styles.link_text}>{btn.name}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Menu