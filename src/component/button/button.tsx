import cn from "classnames";

import styles from "./styles.module.scss";
import { IButton } from "@lib/entity";

const Button = (props: IButton) => {
  return (
    <button
      className={cn(props.style,{
        [styles.btn_agree]: !props.mode,
        [styles.btn_disagree]: props.mode,
      })}
      onClick={props.handler}
    >
      {props.text}
    </button>
  );
};

export default Button;
