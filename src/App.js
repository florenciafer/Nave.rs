

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';

function App() {
  return (
    <div className="App">
  < Router>
     <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />

      </Switch>

    </Router>
    </div>
  );
}

export default App;
