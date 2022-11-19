import React, { useContext } from "react";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import styles from "./Home.module.css";
import AuthContext from "../../store (context)/AuthContext";

const Home = () => {
  const context = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={context.onLogout}>Выход</Button>
    </Card>
  );
};

export default Home;
