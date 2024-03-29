import React, { Component, Fragment } from "react";
import reactDom from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate  from "react-alert-template-basic";
import Header from "./layout/Header";
import Dashboard from "./Leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider } from "react-redux";
import store from "../store";



// alert options

const alertOptions ={
  timeout:3000,
  position:'top right'
}
class App extends Component {
 
  render() {
   
    return (
      
      <Provider store={store}>
        <AlertProvider template={AlertTemplate}{...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="Container">
            <Dashboard />
          </div>
        </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

reactDom.render(<App />, document.getElementById("app"));
