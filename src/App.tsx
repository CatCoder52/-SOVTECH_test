import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./global/RTK/store";
import { Home, Films, Page404 } from "./Page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films/:params" component={Films} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
