import styles from './styles.module.scss'

const StoryList = () =>{
    return(
        <div className={styles.storyList}>
           <div className={styles.storyList_item}>
                <div className={styles.item__info}>
                    <h1 className={styles.item__text_large}></h1>
                    <h1 className={styles.item__text_mediume}></h1>
                </div>
                <div className={styles.item__upload}>
                    <h1 className={styles.item__text_mediume}></h1>
                    <h1 className={styles.item__text_name}></h1>
                    <button className={styles.item__upload_btn}></button>
                </div>
           </div>
        </div>
    )
}

export default StoryList