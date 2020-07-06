import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import EditEmployees from "./Components/EditEmployees";
import AddEmployees from "./Components/AddEmployees";

// import { GlobalProvidor } from "./Components/GlobalState";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <GlobalProvidor> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddEmployees} />
          <Route exact path="/edit/:id" component={EditEmployees} />
        </Switch>
        {/* </GlobalProvidor> */}
      </div>
    </Router>
  );
}

export default App;
