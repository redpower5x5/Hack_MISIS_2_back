import React from "react";

import { UserContext } from "../contexts/UserContext";

const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw Error("The UserContext context is null.");
  }
  return context;
};

export default useUser;
