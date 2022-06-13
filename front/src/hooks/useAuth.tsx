import React from "react";

import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw Error("The AuthContext context is null.");
  }
  return context;
};

export default useAuth;
