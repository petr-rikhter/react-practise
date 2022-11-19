import React, { useContext } from "react";
import AuthContext from "../../store (context)/auth-context";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const context = useContext(AuthContext);

  return (
    // для потребления контекста исползуется consumer
    // <AuthContext.Consumer>
    //   {(context) => {
    <nav className={styles.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
    // }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
