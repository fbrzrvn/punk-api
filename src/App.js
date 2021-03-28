import { Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import ProtectedRoute from './helpers/ProtectedRoute';

import store from './store';
import Beer from './pages/Beer';
import Find from './pages/Find';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/beers/:beerId" component={Beer} />
          <Route path="/beers" component={Find} />
          <ProtectedRoute>
            <Route path="/" component={Home} />
          </ProtectedRoute>
        </Switch>
      </ReduxProvider>
    </>
  );
}

export default App;
