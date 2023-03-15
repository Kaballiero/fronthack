import arrow from './arrow.svg'
import styles from './styles.module.scss'

interface IMenu{
    select: number
    btnName:string[]
}


const Menu=(props:IMenu)=>{
    return(
        <div className={styles.menu}>
            {props.btnName.map((btn,index)=>(
                <div className={styles.button}>
                    {index===props.select&&<img className={styles.button_arrow} src={arrow}/>}
                    <a className={styles.link}>
                        <p className={styles.link_text}>{btn}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Menu