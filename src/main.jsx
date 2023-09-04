import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-vertical-timeline-component/style.min.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: true,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: true,
  mirror: false,
  anchorPlacement: "top-bottom",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
