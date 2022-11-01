import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../containers/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ]);
    return(
      <Layout>
          <RouterProvider  router={router}/>
      </Layout>
    );
};

export default App;