import React, { Component } from 'react';
import './User.css';

class User extends Component{
	constructor(){
		super();
		
	}
	componentWillMount(){
		var loginState = localStorage["login_state"];
//		console.log(loginState);
		if(loginState == "true"){
			var username = localStorage["username"];
			this.state={
				name:username,
 				noLoginClass:"nologin center hide",
 				isLoginClass:"userlogin center",
 				quitClass:"quit"
			}
		}
		else{
			this.state={
				noLoginClass:"nologin center",
				isLoginClass:"userlogin center hide",
				quitClass:"quit hide"
			}
		}
		
		
	}
	
	render(){
		return(
			<div className="userbox">
         		 <div className="logininfo">
                	<div className={this.state.noLoginClass}>
                    	<a className="loginbut" href="http://localhost:3000/login#/login?_k=a17r5d" target="_self">登录 / 注册</a>
               		</div>
               		<div className={this.state.isLoginClass}>
               			<img src="https://www.lgstatic.com/images/myresume/default_headpic.png"/>
               			<h3>{this.state.name}</h3>
               		</div>
            	</div>
     
        		<div className="buttons">         
	           		<a className="button deliver" href="">投递</a>
	           		<a className="button interview" href="">面试</a>
	            	<a className="button invitation" href="">邀约</a>
	            	<a className="button collect" href="">收藏</a>
        		</div>
        		<div className={this.state.quitClass} onClick={this.quit_login}>退出登录</div>
        		
        </div>
		)
	}
	quit_login=(e)=>{
		localStorage.clear();
//		alert(localStorage.username);
//		alert(localStorage.login_state);
		this.setState({
 				noLoginClass:"nologin center",
 				isLoginClass:"userlogin center hide",
 				quitClass:"quit hide" 
			})
		
	}

}

export default User