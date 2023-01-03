import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider  } from "react-redux"
import store from "./store"
import App from './routes/App';
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
