import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./services/ListEmployeeComponent";
import HeaderComponent from "./services/HeaderComponent";
import FooterComponent from "./services/FooterComponent";
import CreateEmployeeComponent from "./services/CreateEmployeeComponent";
import ViewEmployeeComponent from "./services/ViewEmployeeComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
            {/* <Route path = "/update-employee/:id" 
component = {UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>{" "}
    </div>
  );
}

export default App;
