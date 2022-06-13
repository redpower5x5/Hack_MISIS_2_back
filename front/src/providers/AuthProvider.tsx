import { FC, useState } from "react";
import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (asAdmin: boolean) => {
    setIsAdmin(asAdmin);
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
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
