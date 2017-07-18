import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
	constructor(){
		super();
		this.state={
			userName:''
		}
		this.goLogin = this.goLogin.bind(this);
	}
	render(){
		return(
			<div id="box">
				<div className="container">
					<form action="/">
						<div>
							<input className="userName" placeholder="已验证手机/邮箱" value={this.state.userName} onChange={this.handleChange}/>
						</div>
						<div>
							<input className="passWord" placeholder="密码" value={this.state.passWord} onChange={this.handleChange}/>
							<i className="eye" onClick={this.handleClick}></i>
						</div>
						<div>
						<button className="btn"  onClick={this.goLogin}>登录</button>
						</div>
						<p>还没账号?</p>
						<div>
						<a href="" className="btn_re" >注册</a>
						</div>
					</form>
				</div>
			</div>
		)
	}
	goLogin(){
		
	}
	handleChange(e){
		this.setState({
 			userName:e.target.value
//			passWord:e.target.value
		})
	}
	handleClick(e){
//		className.push("openeye")
		console.log(111)
		this.setState({
			className:"openeye"
		})
	}
	
}

export default Login
