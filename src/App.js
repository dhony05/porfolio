import React from "react";

import "./App.css";
import NavComponent from "./components/navComponent";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
  
        <NavComponent>

        </NavComponent>
      
    </HashRouter>
  );
}

export default App;
