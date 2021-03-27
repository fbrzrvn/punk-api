import { createStore, compose } from 'redux';
import reducers from './reducers';

const devTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = compose(devTools);
const store = createStore(reducers, middleware);

export default store;
