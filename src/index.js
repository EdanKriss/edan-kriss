import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// BrowserRouter checks entire url against History object
// Route component sets component that renders only at url
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// this was the only way I could get jquery and boostrap to work together
// every other way ended with boostrap placed first in bundle
global.jQuery = require('../libs/jquery-3.2.1.min.js');
require('../libs/bootstrap.min.js');
import '../libs/font-awesome/css/font-awesome.min.css';

import '../scss/styles.scss';

import '../css/pepsi.css';
import 'file-loader?name=[name].[ext]!../index.html';
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Learning from "./components/learning";
import Nav from "./components/nav";
import Footer from "./components/footer";
import reducers from './reducers';
import '../css/materialdesignicons.min.css';
import '../css/floatyspace.css';
import './floatyspace.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

window.renderReact = () => {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<div>
					<Nav />
					<Switch>
						<Route path="/contact" component={() => <div></div>} />
						<Route path="/projects" component={Projects} />
						<Route path="/skills" component={Skills} />
						<Route path="/learning" component={Learning} />
						<Route path="/about" component={About} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		</Provider>
		, document.querySelector('.holder')
	);
};

const space = document.getElementById('floatyspace');
space.addEventListener('animationend', (event) => {
	console.debug(event, 'animationend event: '+new Date().toTimeString());
	if (event.animationName === 'fadeOut') {
		if (
			space.classList.contains('fade-out-dot7s') ||
			space.classList.contains('fade-out-1s') ||
			space.classList.contains('fade-out-1dot5s')
		) {
			space.style.display = 'none';
			space.classList.remove('fade-out-dot7s');
			space.classList.remove('fade-out-1s');
			space.classList.remove('fade-out-1dot5s');
			window.scrollTo({ top: 0, left: 0 });
			window.renderReact();
		}
	}
});