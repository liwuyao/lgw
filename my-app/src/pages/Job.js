import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import PropTypes from 'prop-types';
import './Job.css';

class Job extends Component {
	constructor(){
		super();
		this.btnChange =  this.btnChange.bind(this);
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
                    },
                    {
                        "positionId": 2735603,
                        "positionName": "Web前端Leader",
                        "city": "成都",
                        "createTime": "今天 08:49",
                        "salary": "18k-20k",
                        "companyId": 30148,
                        "companyLogo": "image1/M00/00/43/CgYXBlTUXNOAB9zQAACiK-dB8kg706.jpg",
                        "companyName": "海南航空",
                        "companyFullName": "海南航空股份有限公司"
                    },
                    {
                        "positionId": 2889754,
                        "positionName": "PHP架构师/PHP高级工程师",
                        "city": "成都",
                        "createTime": "昨天 09:53",
                        "salary": "20k-30k",
                        "companyId": 33179,
                        "companyLogo": "i/image/M00/30/1C/CgpFT1k5HyuAc11WAAEB4bMyYyg889.jpg",
                        "companyName": "掌麦科技",
                        "companyFullName": "四川掌麦科技有限公司"
                    },
                    {
					 	"positionId": 3260293,
					 	"positionName": "手游联运专员",
					 	"city": "广州",
					 	"createTime": "今天 14:49",
					 	"salary": "5k-10k",
					 	"companyId": 29750,
					 	"companyLogo": "image1/M00/00/42/Cgo8PFTUXM-ADbYaAABkFvdxFTs993.png",
					 	"companyName": "天拓游戏",
					 	"companyFullName": "广东星辉天拓互动娱乐有限公司"
					 }
			],
			joblistmore:[]
		}
	}
	render(){
		 var list = this.state.joblist.map(function(elem) {
            	return <Jobitem job={elem} key={elem.positionId}/>;
            })
		return(

			<div>
				<div className="custom-info none">
					<span className="info">
						10秒钟定制职位
					</span>
					<a className="go" href="http://localhost:3000/#/login?_k=q05ubd">
						<em className="icon"></em>
						<em className="text">去登录</em>
					</a>
				</div>
				<ul>
					{list}
					<li className={this.state.btnclass} onTouchStart={this.btnChange}>加载更多</li>
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
		var oldjoblist = this.state.joblist
		var newjoblist = oldjoblist.concat(joblistmore)
		console.log(newjoblist);
		this.setState({
        		btnclass:"list-more2",
        		joblist:newjoblist
        	})
		 setTimeout(()=>{
           this.setState({
          	   btnclass:"list-more"
          })
   	   	 },100)
		
	}
}
class Jobitem extends React.Component{
   	  render(){
   	  	 let {job} = this.props
   	  	 return (
		         <li className="activeable list-item">
		            <img src="http://www.lgstatic.com/i/image/M00/2C/02/CgpEMlkln3aATD2JAAARUPOW1rw744.png" className="item-logo" />
		            <div className="item-desc">
		                <h2 className="item-title">{job.companyFullName}</h2>
		                <p className="item-info">
		                    <span className="item-pos">
		                        {job.positionName}
		                    </span>
		                    <span className="item-salary">{job.salary}</span>
		                </p>
		                <p className="item-time">{job.createTime}</p>
		            </div>
		        </li>

   	  	 	)
   	  }
   }
export default Job;