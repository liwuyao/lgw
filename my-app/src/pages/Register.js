import React, { Component } from 'react';
import { Link,IndexLink,browserHistory } from 'react-router';
import './Register.css';

class Register extends Component{
	constructor(){
		super();
		this.state={
			phone:"",
			eyeclass:'eye',
			eyeType:"password"
		}
	}
	render(){
		return (
			<div className="registerBox">
				<div className="wrap">
					<form action="http://localhost:3000/#/Login?_k=8clvns">
						<div className="wrapTop">
							<input type="text" className="phone"  value={this.state.phone} onChange={this.handleChange} placeholder="手机号"/>
							<div>
								<input type="text" className="code"  value={this.state.code} placeholder="请证明你不是机器人"/>
								<img class="vcode" src="https://passport.lagou.com/vcode/create?from=register&refresh=1500347800472"/>
								<a>看不清楚,<em>换一张</em></a>
							</div>
							<div className="msg">
								<input type="text" className="phCode vcode"  value={this.state.phCode} placeholder="短信验证码"/>
								<input type="button" id="get"  value="获取" />
							</div>
						</div>
						<div className="passwordBox">
							<input type={this.state.eyeType} className="pwd" placeholder="设置6-16位密码" maxLength="16" minLength="6"/>
							<i className={this.state.eyeclass} onClick={this.eyeClick}></i>
						</div>
						<div>
							<input type="button" className="submit" value="注册" id="reg" />
						</div>
						<div className="qus">已有账号?</div>
						<Link to="/Login" className="login">登录</Link>
						<div className="qus">点击注册,即代表您同意<a href="#">《拉勾用户协议》</a></div>
					</form>
				</div>
			</div>
		)
	}
	eyeClick=(e)=>{
		this.setState({
			eyeclass:"openEye",
			eyeType:"text"
		})
		console.log(this.state.eyeclass);
		setTimeout(()=>{
           this.setState({
          	   eyeclass:"eye",
          	   eyeType:"password"
          })
       },1000)
	}
}

export default Register