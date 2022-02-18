import React from "react";
import ReactDOM from "react-dom";
//import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavbarS} from "./components/nav-bar/index";
import {FooterS} from "./components/footer/index";
import {Main} from "./pages/main/index";
import {Register} from "./pages/register/Register"
import {Login} from "./pages/login/Login"
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <NavbarS />
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Main />} />
       <Route Path="/register" element={<Register/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
    </BrowserRouter>
    <FooterS/>
  </React.StrictMode>,
  document.getElementById("root")
);
