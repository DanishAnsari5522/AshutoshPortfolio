
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
