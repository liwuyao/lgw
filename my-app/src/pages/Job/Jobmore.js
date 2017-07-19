import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import '../Job.css';
class Jobmore extends React.Component{
	constructor(){
		super();
		this.state={
			btnclass:"list-more"
		}
		this.btnChange =  this.btnChange.bind(this);
	}
	render(){
		let {cits3} = this.props;
		return(
			<li className={this.state.btnclass} onTouchStart={this.btnChange}>加载更多</li>
		)
	}
		btnChange(){		
			var joblistmore=[{       			
					 	 "positionId": 3273954, 
					 	 "positionName": "高级风险数据挖掘工程师", 
					 	 "city": "上海", 
					 	 "createTime": "今天 09:06",
					 	 "salary": "15k-30k", 
					 	 "companyId": 160479, 
					 	 "companyLogo": "i/image/M00/17/5D/CgpFT1j-7LaAVbSxADiiWd_ZdNc666.png", 
					 	 "companyName": "上海宏鹿信息技术服务有限公司", 
					 	 "companyFullName": "上海宏鹿信息技术服务有限公司"
					 }]
			var oldjoblist = this.props.list;
			var newjoblist = oldjoblist.concat(joblistmore);
			this.props.listmore(newjoblist);
		}
	}

export default Jobmore;