import { IStyleItem } from "@lib/entity";
import cn from 'classnames';

import Check from "./check";
import styles from "./styles.module.scss";

const StyleItem = (props: IStyleItem) => {
  return (
    <div className={styles.item}>
        <div className={styles.item_color}></div>
        
        {props.activ &&<div className={styles.item_check}><Check/></div>}
        <div className={styles.item_name}>{props.name}</div>
    </div>
  );
};

export default StyleItem;
