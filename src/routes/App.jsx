import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "../context/AppContext.js";
import useInitialState from "../hooks/useInitialState.js";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Products from "../containers/Products";
import Know from "../containers/Know";
import Contact from "../containers/Contact";
import Pqrs from "../containers/Pqrs.jsx";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import Sibebar from "../components/Sibebar";
import ShoppingCart from "../containers/ShoppingCart";
import Information from "../containers/Information";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import Purchase from "../containers/Purchase";
import Solution from "../containers/Soluction";
import Blog from "../containers/Blog";

import Product from "../components/Product";
import Post from "../components/handling/Post";
import ItemOrdering from "../components/handling/ItemOrdering.jsx";

const App = () => {
  const initialState = useInitialState();
  return(
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes >
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/solution" element={<Solution />}/>
            <Route path="/know" element={<Know />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/pqrs" element={<Pqrs />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/profile-user" element={<Sibebar/>}/>
            <Route path="/shopping-bag" element={<ShoppingCart />}/>
            <Route path="/shopping-bag/information" element={<Information />}/>
            <Route path="/shopping-bag/payment" element={<Payment />}/>
            <Route path="/shopping-bag/success" element={<Success />}/>
            <Route path="/purchase/:id" element={<Purchase />}/>
            <Route path="products/:category" element={<Product />}/>
            <Route path="/blog/:idPost" element={<Post />}/>
            <Route path="/profile-user/:code_buy" element={<ItemOrdering />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;