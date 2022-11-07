import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../containers/Home";
import Know from "../containers/Know";
import Contact from "../containers/Contact";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import Products from "../containers/Products";
import ShoppingCart from "../containers/ShoppingCart";
import AppContext from "../context/AppContext.js";
import useInitialState from "../hooks/useInitialState.js";

const App = () => {
  const initialState = useInitialState();
  return(
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/know" element={<Know />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/shopping-bag" element={<ShoppingCart />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;