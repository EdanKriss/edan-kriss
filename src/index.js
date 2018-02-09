import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter checks entire url against History object
// Route component sets component that renders only at url
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splash from "./components/splash";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={Splash} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
, document.querySelector('.container'));
