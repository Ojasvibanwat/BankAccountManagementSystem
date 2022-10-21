import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Withdraw,
  Deposit,
  Login,
  AdminLogin,
  AdminHome,
  Add,
  DeleteC,
  Retrieve,
  View
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}/>
      <Route path="/Withdraw" element={<Withdraw/>}/>
      <Route path="/Deposit" element={<Deposit/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/home" element={<Blog/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/DeleteC" element={<DeleteC/>}/>
      <Route path="/Retrieve" element={<Retrieve/>}/>
      <Route path="/View" element={<View/>}/>




      </Routes>
      <Footer/>
      </Router>,
        
  document.getElementById("root")
);

serviceWorker.unregister();
