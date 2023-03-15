import icon from './icon.svg'
import styles from './styles.module.scss'

const Chat=()=>{
return(
    <div className={styles.chat}>
        <p className={styles.title}>Попробуйте преобразовать свои мысли</p>

        <div className={styles.border}>
            <div className={styles.content}>
                fghfg
            </div>
         </div>

         <div className={styles.message}>
            <input type="text" placeholder="Введите текст или загрузите свой файл для обработки..." className={styles.message_inp} />
            <button  className={styles.message_btn}>
                <img src={icon}/>
            </button>
         </div>

    </div>
)
}

export default Chat