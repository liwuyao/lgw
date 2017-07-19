import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import './index.css';
import App from './App';
import Login from './pages/Login';
import registerServiceWorker from './registerServiceWorker';
import Search from './pages/Search';
import User from './pages/User';
import Register from './pages/Register';
import Job from './pages/Job';
ReactDOM.render((
    <Router history={hashHistory}>
     <Route path="/" component={App}>
     	<IndexRoute component={Job} />
     	<Route path="/job" component={Job}></Route>
     	<Route path="/search" component={Search}></Route>
     	<Route path="/user" component={User}></Route>
     </Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
 	</Router>
 	)
	, document.getElementById('root'));
registerServiceWorker();
