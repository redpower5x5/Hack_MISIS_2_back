import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda"); //runtime download
}
