import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./StyleSheet/style.css";
import Home from "./Components/Home";
import EditEmployees from "./Components/EditEmployees";
import AddEmployees from "./Components/AddEmployees";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddEmployees} />
          <Route exact path="/edit/:id" component={EditEmployees} />
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
