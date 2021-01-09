import React from "react";
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      
      <Switch >
        <Route path="/" exact component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
