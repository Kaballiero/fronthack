import { IReqItem } from "@lib/entity";

import Download from "./download";

import styles from "./styles.module.scss";

const ReqItem = (props: IReqItem) => {
  return (
    <div className={styles.reqItem}>
      <div className={styles.branch}>
        <p className={styles.branch_name}>{props.branch}</p>
        <h1 className={styles.branch_date}>
          Дата и время: <br />
          {props.date}
        </h1>
      </div>
      <div className={styles.template}>
        <p className={styles.template_text}>{props.text}</p>
        <div className={styles.container}>
          <p className={styles.template_name}>{props.template}</p>
          <a href={props.loadLink} className={styles.template_btn}>
            <Download />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReqItem;
