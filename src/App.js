
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

function App() {
 /*  useEffect(() => {
    requestNavers();
  }, []) */
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
