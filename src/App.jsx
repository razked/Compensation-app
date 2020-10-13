import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// styles
import "./App.scss";
import "./Styles/typo.scss";
import "./Styles/layout.scss";

// containers
import SideBar from "./Containers/SideBar/SideBar";
import Compensation from "./Containers/Compensation/Compensation";

function App() {
  return (
    <div className="App">
      <SideBar />

      <div className="main">
        <Switch>
          <Route path="/compensation" component={() => <Compensation />} />
          <Route path="/debts" component={() => <div>חובות</div>} />
          <Route path="/pay-advanced" component={() => <div>הקפה</div>} />

          <Redirect from="/" to="/compensation" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
