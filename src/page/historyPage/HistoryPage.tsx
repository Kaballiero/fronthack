import ReqItem from "src/component/reqItem/ReqItem";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import Menu from "../../component/menu/Menu";

import styles from "./styles.module.scss";

const reqMap = [
  {
    branch: "Номер сообщения/название ветки",
    date: "2023-02-14 11:14:20 ",
    text: "Сообщение: текст. Много текста. Очень много текста...",
    template: "Имя шаблона",
    loadLink: "#",
  },
];

const HistoryPage = () => {
  return (
    <div className={styles.historyPage}>
      <div>
        <Header />
        <div className={styles.container}>
          <Menu select={2} />
          {reqMap.map((item) => (
            <ReqItem
              branch={item.branch}
              date={item.date}
              text={item.text}
              template={item.template}
              loadLink={item.loadLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HistoryPage;
