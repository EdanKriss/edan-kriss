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
import '../css/anim.css';
import 'file-loader?name=[name].[ext]!../index.html';
import Splash from "./components/splash";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Learning from "./components/learning";
import Nav from "./components/nav";
import Footer from "./components/footer";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Nav />
				<Switch>
					<Route path="/contact" component={()=>{return (<div id="contactSpacer"><br/><br/><br/></div>);}}/>
					<Route path="/projects" component={Projects} />					
					<Route path="/skills" component={Skills} />
					<Route path="/learning" component={Learning} />
					<Route path="/about" component={About} />
					<Route path="/" component={Splash} />
				</Switch>
				<Footer />
			</div>
		</BrowserRouter>
	</Provider>
, document.querySelector('.holder'));
