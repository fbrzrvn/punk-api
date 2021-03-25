import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Beer from './pages/Beer';
import Find from './pages/Find';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/beers/:beerId" component={Beer} />
				<Route path="/beers" component={Find} />
				<Route path="/" component={Home} />
			</Switch>
		</>
	);
}

export default App;
