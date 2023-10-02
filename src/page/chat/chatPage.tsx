
import Header from "src/component/header/Header";
import Footer from "src/component/footer/Footer";

import styles from "./styles.module.scss";
import { json } from "stream/consumers";


const ChatPage = () => {
  return (
    <div className={styles.chatPage}>
      <Header />
      <div className={styles.container}>
        
      </div>
      <Footer/>
    </div>
  );
};

export default ChatPage;
