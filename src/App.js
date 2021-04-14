import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Add from "./page/Add";
import Edit from "./page/Edit";
import Home from './page/Home';
import Login from './page/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Router>
     <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/add" component={Add}></Route>
      <Route exact path="/home/edit/:id" component={Edit}></Route>
   </Switch>

    </Router>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
