// import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import React, { useContext } from "react";
import AuthContext from "./store (context)/AuthContext";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // //в данный эффект мы помещаем код побочного эффекта, то есть теперь весь этот код не будет запускаться при перезапуске компонента, он будет запускатьсяя автоматически реактом только в случае изменения зависимости в массиве.
  // useEffect(() => {
  //   //создаем переменную где храним значение логин пользователя
  //   const storedLoginInfo = localStorage.getItem("isLoggedIn");

  //   //Вот так делать нельзя, так как в таком случае будет запускаться бесконечный цикл, так как при обновлении состояния обновляется компонент.
  //   if (storedLoginInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   //Сохранение в локалсторейдж, первый аргумент - название(ключ), второй - значение. В коносли браузера его смотреть можно в application => local storage
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   //Очищаем локальное хранилище
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const context = useContext(AuthContext);
  return (
    // Когда используется обертка контекста, то обертка фрагмента необязательна
    // <React.Fragment>
    // <AuthContext.Provider
    //   value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    // >
    <React.Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
    // </AuthContext.Provider>
    // </React.Fragment>
  );
}

export default App;
