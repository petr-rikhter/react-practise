import React, { useState, useEffect } from "react";

//Глобавльный компонент, доступный везде
const AuthContext = React.createContext({
  isLoggedIn: false,
  //функция-пустышка для появления автокомплита при обращении и контексту из-вне
  onLogout: () => {},
  onLogin: (email, password) => {},
});

//отдельный компонент по управлению контекстом(опционально, но это хорошая практика написания кода)
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("isLoggedIn");

    if (storedLoginInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const logInHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logOutHandler,
        onLogin: logInHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
