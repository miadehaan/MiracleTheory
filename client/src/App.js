import React from "react";
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      
      <Switch >
        {/* <Route path="/" exact component={Startup} /> */}
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
