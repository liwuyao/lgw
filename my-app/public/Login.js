import Reat,{ component} from 'react';
import {browserHistory} from 'react-router';
//import PropTypes from 'prop-type';
import './Login.css';

class Login extends Component{
//	constructor(){
//		super();
//	}
	render(){
		return(
			<div className="container">
		<input className="form-control"  />
		<button className="btn btn-success" >登陆</button>
			</div>
		)
	}
}
export default Login

