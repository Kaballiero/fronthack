import plus from './plus.svg'

import styles from "./styles.module.scss";

const Pattern = () => {
  return (
    <div className={styles.pattern}>
    <div className={styles.pattern_add}>
      <button className={styles.btn}><img src={plus}/></button>
      <h1 className={styles.label}>Добавить новый шаблон</h1>
    </div></div>
  );
};

export default Pattern;
