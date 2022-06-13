import React from "react";

export type AuthContextProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  isBusines: boolean;
  onLogin: (asAdmin: boolean, asBusines: boolean) => void;
  onLogout: () => void;
};

const AuthContext = React.createContext<AuthContextProps | null>(null);

export { AuthContext };
