import React from 'react';

import "./App.css";
import Home from "./pages/Home";
import QRgen from "./pages/QRgenerator";
import QRscan from "./pages/QRscanner";
import {
  useLocation,
  Switch,
  HashRouter,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

const App1 = ()=>{
return(
  <div className="App">
  <div className="App-header">
    <QRgen url = {"censuble.com"}/>
  </div>
</div>
)
}


function App({url}) {
  return (
    <HashRouter>
      <Route component={App1} exact path="/"/>
    </HashRouter>
  );
}

export default App;
// "babel-loader": "^8.2.5",
