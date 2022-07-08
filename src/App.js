import React, { Fragment } from "react";
import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css";
import HomePage from "./components/pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/pages/user/UserList";
import User from "./components/pages/CreateUser/user";
import NewUser from "./components/pages/CreateUser/NewUser";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/product/NewProduct/NewProduct";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <div className="container">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/newproduct" element={<NewProduct />} />
            <Route exact path="/product/:productid" element={<Product />} />
            <Route exact path="/users/:userid" element={<User />} />
            <Route exact path="/newuser" element={<NewUser />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

<>
  <Router>
    <TopBar />

    <SideBar />
    <Routes>
      <Fragment>
        <Route exact path="/" element={<HomePage />} />

        {/*  <Route path="/users">
        <div className="container">element={<UserList />}</div>
      </Route> */}
      </Fragment>
    </Routes>
  </Router>
</>;
