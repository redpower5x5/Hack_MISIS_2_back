import React from "react";

export type AuthContextProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  onLogin: (asAdmin: boolean) => void;
  onLogout: () => void;
};

const AuthContext = React.createContext<AuthContextProps | null>(null);

export { AuthContext };
