import { Route, Switch } from 'react-router-dom';
import Beer from './pages/Beer';
import Find from './pages/Find';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/beers/:beerId" component={Beer} />
      <Route path="/beers" component={Find} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
