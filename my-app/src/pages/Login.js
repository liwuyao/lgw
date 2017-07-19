import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
	constructor(){
		super();
		this.state={
			userName:'',
			alertname:"out",
			alertkey:"out",
			keyval:""
		}
		this.goLogin = this.goLogin.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.fadin = this.fadin.bind(this);
		this.fadinkey = this.fadinkey.bind(this);
	}
	render(){
		return(
			<div id="box">
				<div className="container">
					<form action="/">
						<div className="name">
							<input className="userName" placeholder="已验证手机/邮箱" value={this.state.userName} onChange={this.handleChange} onFocus={this.fadin}/>
							<i className={this.state.alertname}>请输入有效账号</i>
						</div>
						<div className="keys">
							<input className="passWord" type="password" placeholder="密码" value={this.state.keyval} onChange={this.handleChange2} onFocus={this.fadinkey}/>
							<i className="eye" onClick={this.handleClick}></i>
							<i className={this.state.alertkey}>6-16位密码</i>
						</div>
						<div>
						<div className="btn" onClick={this.goLogin}>登录</div>
						</div>
						<p>还没账号?</p>
						<div>
						<a href="http://localhost:3000/#/register?_k=1ww9zy" className="btn_re" >注册</a>
						</div>
					</form>
				</div>
			</div>
		)
	}
	goLogin(){
			localStorage.lastname=this.state.userName;
			var name = this.state.userName;
			var keyword=this.state.keyval;
			console.log(keyword)
			var re1 = /^1\d{10}$/;//手机号码，1开头的11位数字
			var re2 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;//邮箱，验证规则：姑且把邮箱地址分成“第一部分@第二部分”这样
													//第一部分：由字母、数字、下划线、短线“-”、点号“.”组成，
												    //第二部分：为一个域名，域名由字母、数字、短线“-”、域名后缀组成，
												    //而域名后缀一般为.xxx或.xxx.xx，一区的域名后缀一般为2-4位，如cn,com,net，现在域名有的也会大于4位
			var re3 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

			if(!re1.test(name)){
				this.setState({
					alertname:"alertname"
				})
			}else{
				this.setState({
					alertname:"out"
				})
			}
			if(!re3.test(keyword)){
				this.setState({
					alertkey:"alertkey"
				})
			}else{
				this.setState({
					alertkey:"out"
				})
			}
	}
	handleChange(e){
		this.setState({
 			userName:e.target.value,
		})
	}
	handleChange2(e){
		this.setState({
			keyval:e.target.value
		})	
	}
	handleClick(){
//		className.push("openeye")
		console.log(111)
		this.setState({
			className:"openeye"
		})
	}
//	获得焦点隐藏
	fadin(){
		this.setState({
			alertname:"out"
		})
	}
	fadinkey(){
		this.setState({
			alertkey:"out"
		})
	}
}

export default Login
