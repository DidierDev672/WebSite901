import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../containers/Home";
import Know from "../containers/Know";
import Contact from "../containers/Contact";

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/know" element={<Know />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;