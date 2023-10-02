import styles from "./styles.module.scss";

const Rate = () => {
  return (
    <div className={styles.rate}>
      <div className={styles.btnBar}>
        <button className={styles.btn_submit}>Сохранить</button>
        <button className={styles.btn_reset}>Сбросить</button>
      </div>
    </div>
  );
};

export default Rate;
