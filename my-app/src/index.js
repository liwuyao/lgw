import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import './index.css';
import App from './App';
import Login from './pages/Login';
import registerServiceWorker from './registerServiceWorker';
import Search from './pages/Search';
import Main from './pages/Main';
import Job from './pages/Job';
ReactDOM.render((
    <Router history={hashHistory}>
     <Route path="/" component={App}>
     	<IndexRoute component={Job} />
     	<Route path="/job" component={Job}></Route>
     	<Route path="/search" component={Search}></Route>
     	<Route path="/main" component={Main}></Route>
     </Route>
    <Route path="/login" component={Login}/>
 	</Router>
 	)
	, document.getElementById('root'));
registerServiceWorker();
