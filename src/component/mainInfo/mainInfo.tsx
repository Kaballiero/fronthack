import Button from "../button/button";
import styles from "./styles.module.scss";

const MainInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.form_name}>
        <p className={styles.form_label}>Имя пользователя</p>
        <input type="text" className={styles.form_input} />
      </div>

      <div className={styles.form_contacts}>
        <div className={styles.form_email}>
          <p className={styles.form_label}>Электронная почта</p>
          <input type="text" className={styles.form_input_short} />
        </div>
        <div className={styles.form_phone}>
          <p className={styles.form_label}>Номер телефона</p>
          <input type="text" className={styles.form_input_short} />
        </div>
      </div>

      <div className={styles.form_info}>
        <p className={styles.form_label}>
          Описание рода деятельности (необязательно)
        </p>
        <textarea className={styles.form_input_large} />
      </div>

      <div className={styles.form_btn}>
        <Button text={"Cохранить"} mode={true}/>
        <Button text={"Сбросить"} mode={false}/>
      </div>
    </div>
  );
};

export default MainInfo;
