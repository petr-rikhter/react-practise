import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [inputPassword, setInputPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //каждый раз когда будут изменяться inputEmail или inputPassword, будет запускаться этот эффект
  useEffect(() => {
    //Давая фишка дает возможность отслеживать поля инпута не постоянно, а только когда пользователь перестал вводить символы на протяжении одной секунды.
    const timer = setTimeout(() => {
      setFormIsValid(
        inputEmail.includes("@") && inputPassword.trim().length > 7
      );
    }, 1000);

    //Но чтобы таймер не запускался каждый раз после ввода символа, есть функция очистки, которая чистит все предыдущие таймеры
    return () => {
      clearTimeout(timer);
    };
  }, [inputEmail, inputPassword]);

  const emailChangeHandler = (event) => {
    setInputEmail(event.target.value);

    // setFormIsValid(inputEmail.includes("@") && inputPassword.trim().length > 7);
  };

  const passwordChangeHandler = (event) => {
    setInputPassword(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && inputEmail.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(inputEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(inputPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(inputEmail, inputPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={inputEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={inputPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
