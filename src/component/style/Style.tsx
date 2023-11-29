import Button from "../button/button";
import StyleItem from "../styleItem/StyleItem";
import styles from "./styles.module.scss";

const styleItemList=[
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
    "базовый синий",
]

const Style = () => {
  return (
    <div className={styles.style}>
      <div>
        <p className={styles.label}>Сменить тему</p>
        <h1 className={styles.text}>
          Выберите тему, соответствующую вашему вкусу:
        </h1>
      </div>
      <div className={styles.style_list}>
        {styleItemList.map(item=>(<StyleItem name={item} activ={true}/>))}
      </div>
      <div className={styles.control}>
        <Button style={styles.control_btn} text={"Сохранить"} mode={false} />
        <Button style={styles.control_btn} text={"По умолчанию"} mode={true} />
      </div>
    </div>
  );
};

export default Style;
