import React from "react";

import { Layout } from "react-mdl";
import "./App.css";
import NavComponent from "./components/navComponent";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
    <div className="demo-big-content">
      <Layout>
        <NavComponent>

        </NavComponent>
      </Layout>
    </div>
    </HashRouter>
  );
}

export default App;
