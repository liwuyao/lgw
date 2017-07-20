import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import './Job.css';
import Jobitem  from './Job/Joblist';
import Jobmore  from './Job/Jobmore';
import $ from 'jquery';
class Job extends Component {
	constructor(){
		super();
		this.btnChangemore = this.btnChangemore.bind(this);
		this.state={
			username:"去登录",
			joblist:[]
		}
	}
	componentWillMount(){
		var loadusername=localStorage.lastname;
		if(loadusername){
			this.setState({
				username:loadusername
			})
		}
		var This = this,
			list="";
//		处理ajx
		$.get("/api", function(data){
			 list = data.sendlist
			 This.setState({
			 	joblist:list
			 })
		});
	}
	render(){
		 var list = this.state.joblist.map(function(elem,index) {
            	return <Jobitem job={elem} key={index}/>;
            })
		return(

			<div>
				<div className="custom-info none">
					<span className="info">
						10秒钟定制职位
					</span>
					<a className="go" href="http://localhost:3000/#/login?_k=q05ubd">
						<em className="icon"></em>
						<em className="text">{this.state.username}</em>
					</a>
				</div>
				<ul>
					{list}
					<Jobmore list={this.state.joblist} listmore={this.btnChangemore}/>
				</ul>
				<div id="copyright">
					<p>©2015 lagou.com, all right reserved </p>
					<div className="copyright-item">
						<span className="phone">移动版&nbsp;·&nbsp;</span>
						<span className="computer">电脑版&nbsp;·&nbsp;</span>
						<a href="#header">回顶部</a>
					</div>
				</div>
			</div>
		);
	}
	btnChangemore(val){
		this.setState({
        		joblist:val
        	})
	}
}
export default Job;