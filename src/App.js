import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./styles.css";
import ButtonAppBar from "./components/buttonappbar.js";
import ButtomNav from "./components/buttomnav";
import About from "./components/about";
import MyOrders from "./components/myorders";
import ProductList from "./components/productlist";
import MessageLog from "./components/message";

export default function App() {
  return (
    <>
      <Router>
        <ButtonAppBar></ButtonAppBar>
        <ButtomNav></ButtomNav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/myorders">
            <MyOrders />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
          <Route path="/message">
            <MessageLog />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
