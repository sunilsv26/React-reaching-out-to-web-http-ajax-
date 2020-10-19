import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL='https://jsonplaceholder.typicode.com'

let myRequest=axios.interceptors.request.use(
  (request) => {
    console.log(request);
    //here we are blocking the request always need to return request
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(myRequest)

let myResponse =axios.interceptors.response.use(
  (response) => {
    console.log(response);
    //here we are blocking the request always need to return request
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.eject(myResponse)
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
