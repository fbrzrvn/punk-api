import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Beer from './pages/Beer';
import Finder from './pages/Finder';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/beers/finder" component={Finder} exact />
				<Route path="/beers/:beerId" component={Beer} exact />
				<Route path="/" component={Home} exact />
			</Switch>
		</>
	);
}

export default App;
