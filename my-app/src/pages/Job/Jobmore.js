import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import '../Job.css';
import $ from 'jquery';
class Jobmore extends React.Component{
	constructor(){
		super();
		this.state={
			btnclass:"list-more",
			addlist:"",
			time:1
		}
		this.btnChange =  this.btnChange.bind(this);
	}
	componentWillMount(){
		var This = this;
		var list ="";
		$.get("/more", function(data){
			 list = data.sendlist
			 This.setState({
			 	addlist:list
			 })
		});
	}
	render(){
		let {cits3} = this.props;
		return(
			<li className={this.state.btnclass} onClick={this.btnChange}>加载更多</li>
		)
	}
  //	发送请求加载更多
		btnChange(){
			var btn = this.state.time;			
			var This = this;
			var list ="";
			$.get("/more",{numbers:2,time:btn}, function(data){
				 list = data.sendlist
				 This.setState({
				 	addlist:list
				 })
			});
			btn++;
			this.setState({
				time:btn
			})
			var joblistmore=this.state.addlist
			var oldjoblist = this.props.list;
			var newjoblist = oldjoblist.concat(joblistmore);
			this.props.listmore(newjoblist);
		}
	}

export default Jobmore;