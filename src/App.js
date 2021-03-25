import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Beer from './pages/Beer';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/beers/:beerId" component={Beer} />
				<Route path="/" component={Home} />
			</Switch>
		</>
	);
}

export default App;
