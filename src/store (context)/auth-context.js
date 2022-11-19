import React from "react";

//Глобавльный компонент, доступный везде
const AuthContext = React.createContext({
  isLogedIn: false,
});

export default AuthContext;
