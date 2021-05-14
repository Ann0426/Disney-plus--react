import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Detail from "./components/Details";
function App() {
  return (
    
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
         <Login/> 
        </Route>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
