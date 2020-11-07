import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchOperation from "./pages/SearchOperation/SearchOperation";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}>
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchOperation />
          </Route>
          <Route path="/result">
            <h2>This is the Result Page</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
