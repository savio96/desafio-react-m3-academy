import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Teste } from "./pages/Teste";
import { Cursos } from "./pages/Cursos";
import { RoutesUrl } from "./components/Router/Router";
import { Header } from "./sectors/Header/Header";
import { Footer } from "./sectors/Footer/Footer";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { ContactWhat } from "./sectors/ContactWhat/ContactWhat";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactWhat></ContactWhat>
      <Header></Header>
      <RoutesUrl></RoutesUrl>

      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
