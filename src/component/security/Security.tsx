import { useCallback, useState } from "react";

import Button from "../button/button";

import styles from "./styles.module.scss";

const Security = () => {

  const [view, setView]=useState(false)
  
  const btnHandler= useCallback(()=>{
    setView(!view)
  },[view])

  return (
    <div className={styles.security}>
      <div className={styles.pass}>
        <p className={styles.label}>Пароль</p>
        <div className={styles.container}>
          <input type={view?"text":"password"} className={styles.input} />
          <Button style={styles.btn_view} text={"Показать"} mode={true} handler={btnHandler} />
          <Button style={styles.btn_change} text={"Изменить"} mode={false} />
        </div>
      </div>
      <div className={styles.tfa}>
        <p className={styles.label}>Двухфакторная аутентификация</p>
        <h1 className={styles.text}>
          Защитите свою учётную запись YAVAYER дополнительным уровнем
          безопасности. После настройки для входа вам будет необходимо ввести
          пароль и код подтверждения со своего телефона.
        </h1>
        <Button style={styles.btn_2fa} text={"Включить двухфакторную аутентификацию"} mode={false} />
      </div>
      <div className={styles.del}>
        <p className={styles.label}>Удаление учётной записи</p>
        <h1 className={styles.text}>
          Удалив учётную запись, ваша история зпросов, шаблоны и диалоги будут
          утеряны навседа.
        </h1>
        
        <Button style={styles.btn_del} text={"Удалить учётную запись"} mode={true} />
      </div>
    </div>
  );
};

export default Security;
