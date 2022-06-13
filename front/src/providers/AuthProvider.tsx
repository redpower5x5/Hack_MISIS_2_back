import { FC, useState } from "react";
import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBusines, setIsBusines] = useState(false);

  const handleLogin = (asAdmin: boolean, asBusines: boolean) => {
    setIsAdmin(asAdmin);
    setIsBusines(asBusines);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isAdmin,
        isBusines,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
