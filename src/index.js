import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import {rootReducer} from "./store/reducers";

import './index.css';
import App from './App';
import thunk from "redux-thunk";

// const reducer = ()=>{

// }

// const store = configureStore({ reducer })

export const store = configureStore ({reducer: rootReducer}, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

