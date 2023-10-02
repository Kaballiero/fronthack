import { Link } from "react-router-dom";
import cn from "classnames";

import { UserIcon } from "../../icon/userIcon";
import { SecurityIcon } from "../../icon/securityIcon";
import { RateIcon } from "../../icon/rateIcon";
import { StyleIcon } from "../../icon/styleIcon";
import styles from "./styles.module.scss";
import { IConItem } from "@lib/entity";

const btnArray = [
  { name: "Личная информация", link: "/lk/info", icon: UserIcon },
  { name: "Безопасность", link: "/lk/security", icon: SecurityIcon },
  { name: "Стилизация", link: "/lk/style", icon: StyleIcon },
  { name: "Тарифный план", link: "/lk/rate", icon: RateIcon },
];


const Container = (props: IConItem) => {
  return (
    <div className={styles.content}>
      <div className={styles.navbar}>
        {btnArray.map((btn,index) => (
          <Link
            className={cn(styles.button, {
              [styles.button_activ]: index==props.sel ,
            })}
            to={btn.link}
          >
            <div className={styles.button_icon}>
              <btn.icon />
            </div>
            <p className={styles.button_text}> {btn.name}</p>
          </Link>
        ))}
      </div>

      <props.element />
    </div>
  );
};

export default Container;
