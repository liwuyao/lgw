import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import Jobitem  from '../Job/Joblist';
import Jobmore  from '../Job/Jobmore';
import '../Job.css';
import $ from 'jquery';
		var list = "";
class Searchresult extends Component{
	constructor(){
		super();
		this.btnChangemore = this.btnChangemore.bind(this);
		this.state={
			btnclass:"list-more",
			joblist:[{
                        "positionId": 2556858,
                        "positionName": "Web前端工程师",
                        "city": "成都",
                        "createTime": "昨天 09:56",
                        "salary": "20k-30k",
                        "companyId": 150134,
                        "companyLogo": "i/image/M00/5E/D2/CgqKkVfs3OaAaxyFAAO24Szt7Io547.png",
                        "companyName": "德誉网络",
                        "companyFullName": "成都德誉电子科技有限公司"
                    }]
		}
	}
	componentWillMount(){
		var name=this.props.datas.toName;
		var intro=this.props.datas.totro;
		var This = this;
			var list ="";
		if(name){
			$.get("/search",{cityNames:name,intros:intro},function(data){
				 list = data.sendlist
				 This.setState({
				 	joblist:list
				 })
			});
		}
	}
	render(){
		var list = this.state.joblist.map(function(elem,index) {
            	return <Jobitem job={elem} key={index}/>;
            })
		return(
			<div>
			{list}
			<Jobmore list={this.state.joblist} listmore={this.btnChangemore}/>
			</div>
		)
	}
	btnChangemore(val){
		this.setState({
        		joblist:val
        	})
	}
}
export default Searchresult;